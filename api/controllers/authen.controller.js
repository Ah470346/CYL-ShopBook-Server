const express = require('express');	
const jsonwebtoken = require('jsonwebtoken');
const User = require('../../models/users.model.js');


module.exports.authen = async (req,res)=>{
	// var user = await User.findOneAndUpdate({email:req.body.email},{token: token},{useFindAndModify:false});
	User.findOne({email:req.body},function(err,user){	
		const token = jsonwebtoken.sign({user},process.env.TOKEN_SECRET);
		res.cookie('token', token);
		res.json({
			token:res.locals.token
		})
	})
}

