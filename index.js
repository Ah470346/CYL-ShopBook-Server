const express = require('express');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = 8080;
mongoose.connect(process.env.URL_MONGO, {useNewUrlParser: true});

const apiBookRouter = require('./api/routers/books.router.js');
const apiUserRouter = require('./api/routers/users.router.js');
const apiAuthenRouter = require('./api/routers/authen.route.js');
const apiListBookRouter = require('./api/routers/listBooks.js');
const apiMenuBookRouter = require('./api/routers/menuBook.router.js');
const apiSlideBookRouter = require('./api/routers/slideBooks.router.js');

app.use(cors(
		{credentials: true, origin: 'http://localhost:3000'}
	));

app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
})


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

app.listen(port , function(){
	console.log('server listening on port ' + port);
})