const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use("/", (req, res, next) => {
    res.send("<p>Hello World!</p>");
});

app.listen(3000);