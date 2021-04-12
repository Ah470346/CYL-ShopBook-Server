const express = require('express');	
const User = require('../../models/users.model.js');


module.exports.author = async (req,res)=>{
	User.findOne({email:req.body},function(err,user){
		res.json({
			token:user.token
		})
	})
}