const express = require('express');
const app = express();
const port = 8000;

app.use('/', express.static(__dirname));

app.get('/', function(req, res){
  res.send('Invalid Endpoint!');
});

app.listen(port, function(){
  console.log('Server started on port: ' + port);
});