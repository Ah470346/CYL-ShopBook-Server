const express = require('express');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require("path");
const fs = require('fs');

require('dotenv').config();

var dir = path.join(__dirname, 'public');

const app = express();
const port = 8080;
// mongoose.connect(process.env.URL_MONGO, {useNewUrlParser: true});

const apiBookRouter = require('./api/routers/books.router.js');
const apiUserRouter = require('./api/routers/users.router.js');
const apiAuthenRouter = require('./api/routers/authen.route.js');
const apiListBookRouter = require('./api/routers/listBooks.js');
const apiMenuBookRouter = require('./api/routers/menuBook.router.js');
const apiSlideBookRouter = require('./api/routers/slideBooks.router.js');

app.use(cors(
		{credentials: true, origin: 'http://127.0.0.1:5500'}
	));

app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})

// var mime = {
//     html: 'text/html',
//     txt: 'text/plain',
//     css: 'text/css',
//     gif: 'image/gif',
//     jpg: 'image/jpeg',
//     png: 'image/png',
//     svg: 'image/svg+xml',
//     js: 'application/javascript'
// };

// app.get('*', function (req, res) {
//     var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
//     if (file.indexOf(dir + path.sep) !== 0) {
//         return res.status(403).end('Forbidden');
//     }
//     var type = mime[path.extname(file).slice(1)] || 'text/plain';
//     var s = fs.createReadStream(file);
//     s.on('open', function () {
//         res.set('Content-Type', type);
//         s.pipe(res);
//     });
//     s.on('error', function () {
//         res.set('Content-Type', 'text/plain');
//         res.status(404).end('Not found');
//     });
// });


app.use('/api/books',apiBookRouter);
app.use('/api/users',apiUserRouter);
app.use('/api/authen',apiAuthenRouter);
app.use('/api/listBooks',apiListBookRouter);
app.use('/api/menuBook',apiMenuBookRouter);
app.use('/api/slideBook',apiSlideBookRouter);

//mideware yeu cầu authentication
// app.use(jwt({ secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] }));

app.get('/', function(req,res){
	res.send('hello');
})

app.get('/file/:name', function (req, res, next) {
  var options = {
    root: dir,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.listen(port , function(){
	console.log('server listening on port ' + port);
})