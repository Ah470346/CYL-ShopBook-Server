const ListBooks = require('../../models/listBooks.model.js');

const Book = require('../../models/books.model.js');


module.exports.index = async (req,res,next)=>{
	ListBooks.find().limit(4).then((listMenu)=>{
		let a = listMenu;
		const b = a.map((item)=>{
			return item.name;
		});
		Promise.all([Book.find({listName: `${b[0]}`}).limit(5).exec(),
					Book.find({listName: `${b[1]}`}).limit(5).exec(),
					Book.find({listName: `${b[2]}`}).limit(5).exec(),
					Book.find({listName: `${b[3]}`}).limit(5).exec()]).then((values)=>{
			let arr = values.map((i,index)=>{
				return {listName: b[index], books: i.map((result)=>{
					return result.name;
				})};
			})
			res.json(arr);
		})
	})
}