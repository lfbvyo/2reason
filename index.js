var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));


var url = 'mongodb://localhost:27017/2reason';




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
app.post('/thread/new', function(req, res){
	console.log(req.query);
	MongoClient.connect(url, function(err, db) {
	    if (err) {
		res.end('500: Internal Server Error :p', 500);
	    }
	    db.collection('threads').insert(req.query);
	});

	res.end('Ok');
});


app.listen(80);
console.log('En servidor salió corriendo por el puerto 80.')
