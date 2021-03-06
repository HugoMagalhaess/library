const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
// const port = process.env.PORT || 3000;
const port =  3000;
// app.use(morgan('combined'));
app.use(morgan('tiny')); // another config
app.use(express.static(path.join(__dirname, '/public/')));


// serving static files  to express
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
/*
to use debbug
set DEBUG=* & node app.js
set DEBUG=app & node app.js
*/
app.get('/', (req, res) => {
  // res.send('Hello from my library app');
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index', { list: ['a', 'b', 'c', 'd', 'e'], title: 'Hannah' });
});

app.listen(port, () => {
  debug(`Listeninn at port  ${chalk.green(port)}`);
});
