const Book = require('../../models/books.model.js');

module.exports.index = async function(req,res,next){
	Book.find().then((books) => res.json(books))
};