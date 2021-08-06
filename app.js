const express = require("express");
const app = express();
const port = 3000;
var exphbs = require('express-handlebars'); //handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var axios = require("axios").default;
var data;
var format;
var location;
//routes

//this is supposed to be the main page, and it needs parameters.
app.get('/', (req, res) => {
  //req.query
  //const params = res.json(req.query)
  location = req.query.loc
  units = req.query.deg
  if (units == "c"){ //User decides if they want Celsius or Farenheit. Default is Celsius.
    format = "metric"
  } else if(units == "f") {
    format = "imperial"
  } 
  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: location,
      lat: '0',
      lon: '0',
      //callback: 'test',
      id: '2172797',
      lang: 'null',
      units: format,
      mode: 'xml, html'
    },
    headers: {
      'x-rapidapi-key': '9617f3f897msh7d7a21fbf5a4059p1d9ba6jsn7115cdc24774',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  };
  

  
  axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
    res.render("home", {data: data})
    console.log(("search").val())
    console.log("Data variable" + data)
  }).catch(function (error) {
    console.error(error);
  });
    
})

app.get("/about", (req, res) => {
  res.render("about", {})
})

app.listen(port, (req, res) => {
    console.log("App listening on port " + port)
})