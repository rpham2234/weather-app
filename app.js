const express = require("express");
const app = express();
const port = 3000;
var exphbs = require('express-handlebars'); //handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    //callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'metric',
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-key': '9617f3f897msh7d7a21fbf5a4059p1d9ba6jsn7115cdc24774',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

var data;

axios.request(options).then(function (response) {
	console.log(response.data);
  data = response.data;
  console.log("Data variable" + data)
}).catch(function (error) {
	console.error(error);
});

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

//routes
app.get('/', (req, res) => {
    res.render("home", {data: data})
})

app.listen(port, (req, res) => {
    console.log("App listening on port " + port)
})