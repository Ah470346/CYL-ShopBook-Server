const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/users.model.js');


module.exports.authen = (req,res)=>{
	User.findOne({email:req.body.email}).then(function(user){
		if(user === null || user.password !== req.body.password){
			res.status(401).send("error account");
		} else {
			const token = jsonwebtoken.sign({email:user.email,password:user.password},process.env.TOKEN_SECRET);
			User.findOneAndUpdate({email:req.body.email},{token:token},()=>{
				res.cookie('token', token).send("set-cookie");
			});
		}
	});
}

module.exports.register = (req,res)=>{
	User.find().then(async function(users){
		let check = false;
		for(let i of users) {
			if(i.email === req.body.email){
				check = true;
				res.json("exist");
				break;
			}
		}
		if(check === false){
			var user = await User.create(req.body);
			if(user){
				res.json("empty");
			}
		}
	});
}

