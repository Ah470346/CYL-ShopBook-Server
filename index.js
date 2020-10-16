const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 3000;
mongoose.connect(process.env.URL_MONGO, {useNewUrlParser: true});

const apiBookRouter = require('./api/routers/books.router.js');
const apiUserRouter = require('./api/routers/users.router.js');

app.use(express.json());

app.use('/api/books',apiBookRouter);
app.use('/api/users',apiUserRouter);

app.get('/', function(req,res){
	res.send('hello');
})

app.listen(port , function(){
	console.log('server listening on port ' + port);
})