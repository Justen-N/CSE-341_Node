const path = require('path');

const express = require('express');
const routes = require('./route/routes.js')
const app = express();
const bodyParser = require('body-parser');

const books = [];
app.set('bookArray', books);
app.set('view engine', 'ejs');
app.use(bodyParser({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.listen(3000);