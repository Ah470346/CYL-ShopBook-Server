const mongoose = require('mongoose');

var booksSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String,
	productDetail:{
		price:String,
		publisher:String,
		publishDate:String,
		pages:String,
		dimensions:String,
		language:String,
		type:String
	},
	categories:[String],
	author:[String],
	aboutTheAuthor:String,
	review:String,
	listName:String
});
var Book = mongoose.model('Book',booksSchema,'books');

module.exports = Book;