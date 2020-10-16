const mongoose = require('mongoose');

var listBooksSchema = new mongoose.Schema({
	name:String,
	image:String
});
var ListBook = mongoose.model('ListBook',booksSchema,'listBooks');

module.exports = ListBook;