const ListBooks = require('../../models/listBooks.model.js');

module.exports.index = async function(req,res,next){
	ListBooks.find().then((listBooks) =>{ 
		res.json(listBooks);
	});
};