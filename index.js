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
const port = 8000;
mongoose.connect(process.env.URL_MONGO, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false});

const apiBookRouter = require('./api/routers/books.router.js');
const apiUserRouter = require('./api/routers/users.router.js');
const apiAuthenRouter = require('./api/routers/authen.route.js');
const apiListBookRouter = require('./api/routers/listBooks.js');
const apiMenuBookRouter = require('./api/routers/menuBook.router.js');
const apiSlideBookRouter = require('./api/routers/slideBooks.router.js');

app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());

app.use('/api/books',apiBookRouter);
app.use('/api/users',apiUserRouter);
app.use('/api/authen',apiAuthenRouter);
app.use('/api/listBooks',apiListBookRouter);
app.use('/api/menuBook',apiMenuBookRouter);
app.use('/api/slideBook',apiSlideBookRouter);

//mideware yeu cầu authentication
app.use(jwt({ secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] }));

app.get('/', function(req,res){
	res.send('hello');
})

app.listen(port , function(){
	console.log('server listening on port ' + port);
})