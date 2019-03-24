const express = require("express");
const path = require('path');

const indexRouter = require("./routes/index");







const port = 3001;
const app = new express();
const server = require('http').Server(app);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

server.listen(port, () => console.log(`Port is running on port ${port}`));