var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/2reason';


app.use(express.static('public'));

//app.get('/', function(req, res){
//  res.send('Hola Mundo!!');
//});

app.get('/categories/', function(req, res){

  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.end('500: Internal Server Error :p', 500);
    }
    db.collection('categories').find().toArray(function(err, docs) {
        res.jsonp(docs);
        db.close();
      });
  });
});



app.listen(80);
