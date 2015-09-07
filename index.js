var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser')


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

var globalLimit = 2;
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
	var thread = req.query;
	thread.creado = new Date();
	thread.comentarios = [];
	MongoClient.connect(url, function(err, db) {
	    if (err) {
		res.end('500: Internal Server Error :p', 500);
	    }
	    db.collection('threads').insert(thread);
	});

	res.end('Ok');
});
// agrega un comentario a un thread
app.post('/comment/new/:thread_id', function(req, res){
        console.log(req.query);
        var comment = req.query;
        comment.creado = new Date();
        MongoClient.connect(url, function(err, db) {
            if (err) {
                res.end('500: Internal Server Error :p', 500);
            }
            db.collection('threads').update(
		{'_id':new ObjectId(req.params.thread_id)}, 
		{$push:{comentarios:comment}}, 
		function(err){
			if (err) {
        		        res.end('500: Internal Server Error :p', 500);
	        	}

		});
        });

        res.end('Ok');
});

// Obtiene los threads de una categoria
app.get('/category/:category_id/:page_num', function(req, res){
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.end('500: Internal Server Error :p', 500);
    }
    db.collection('threads').find(
	{'categoria':req.params.category_id},
	{ comentarios:{$slice:10}},{ limit:globalLimit, skip:globalLimit*req.params.page_num}
	).toArray(function(err, docs) {
        res.jsonp(docs); 
        db.close();
      });
  });
});

// Obtiene toda la info de un thread
app.get('/thread/:thread_id/:page_num', function(req, res){
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.end('500: Internal Server Error :p', 500);
    }
    db.collection('threads').findOne({'_id':new ObjectId(req.params.thread_id)}, function(err, docs) {
	if (err) {
		console.log(err);
      		res.end('500: Internal Server Error :p', 500);
	}

        res.jsonp(docs);
        db.close();
      });
  });
});


app.listen(80);
console.log('En servidor salió corriendo por el puerto 80.')
