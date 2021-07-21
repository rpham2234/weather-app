const express = require("express");
const app = express();
const port = 3000;
var exphbs = require('express-handlebars'); //handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render("home", {msg: "hello world"})
})

app.listen(port, (req, res) => {
    console.log("App listening on port " + port)
})