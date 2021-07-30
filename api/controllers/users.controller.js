const User = require('../../models/users.model.js');

module.exports.index = async function(req , res){
	User.find().then(function(users){
		res.json(users)
	})
};

// module.exports.create = async function(req , res){
// 	var user = await User.create(req.body);
// 	res.json(user);
// };