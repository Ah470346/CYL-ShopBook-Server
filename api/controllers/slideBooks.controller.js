const ListBooks = require('../../models/listBooks.model.js');

const Book = require('../../models/books.model.js');

module.exports.index = async (req,res,next)=>{
	ListBooks.find().then((listMenu)=>{
		let a = listMenu;
		const b = a.map((item)=>{
			return item.name;
		});
		Promise.all(b.map((i)=>{
			return Book.find({listName: `${i}`}).exec();
		})).then((values)=>{
			let arr = values.map((i,index)=>{
				return {listName: b[index],length: i.length ,listBooks: i.map((result)=>{
					return result;
				})};
			})
			res.json(arr);
		})
	})
}