var express = require('express');
var  chalk =  require('chalk');
var  debug =  require('debug')('app');
var morgan = require('morgan');
var path =  require ('path');


var app = express();

app.use(morgan('combined'));
//app.use(morgan('tiny')); another config
app.use(express.static(path.join(__dirname, '/public/')))
/*
to use debbug
set DEBUG=* & node app.js
set DEBUG=app & node app.js
*/
app.get('/', function(req, res){
   // res.send('Hello from my library app');
    res.sendFile(path.join(__dirname, 'views/index.html') );
});

app.listen(3000, function() {
    debug( `Listeninn on port  ${chalk.green('3000')}` );
})