var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//set port
app.set('port', (process.env.PORT || 2800));

//set static path
app.use(express.static(path.join(__dirname, 'client')));

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exprended:true}));

//start server
app.listen(app.get('port'), function(){
  console.log("express server started on port:"+app.get('port'));
});
