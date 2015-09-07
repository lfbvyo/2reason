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

// Devuelve las categorias
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
// Guarda un nuevo thread en la base de datos 
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
// Obtiene los threads de una categoria
app.get('/category/:category_id/:page_num', function(req, res){
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.end('500: Internal Server Error :p', 500);
    }
    db.collection('threads').find({'categoria':category_id}).toArray(function(err, docs) {
        res.jsonp(docs);
        db.close();
      });
  });
});



app.listen(80);
console.log('En servidor salió corriendo por el puerto 80.')
