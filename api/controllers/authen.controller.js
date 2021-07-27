const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/users.model.js');


module.exports.authen = (req,res)=>{
	User.findOne({email:req.body.email}).then(function(user){
		if(user === null || user.password !== req.body.password){
			res.status(401).send("error account");
		} else {
			const token = jsonwebtoken.sign({email:user.email,password:user.password},process.env.TOKEN_SECRET);
			User.findOneAndUpdate({email:req.body.email},{token:token},()=>{
				console.log("hello",token);
				res.cookie('token', token).send("set-cookie");
			});
		}
	});
}

