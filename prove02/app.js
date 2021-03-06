const path = require('path');

const express = require('express');
const routes = require('./route/routes.js')
const app = express();
const bodyParser = require('body-parser');


app.use(routes);
app.listen(3000);

const books = [];
app.set('bookArray', books);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
