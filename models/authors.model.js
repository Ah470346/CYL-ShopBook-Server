const mongoose = require('mongoose');

var authorsSchema = new mongoose.Schema({
	name:String,
	about:String,
	products:[String]
});
var Author = mongoose.model('Author',authorsSchema,'authors');

module.exports = Author;