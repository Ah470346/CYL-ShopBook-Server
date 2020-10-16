const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	email:String,
	password:String
});
var User = mongoose.model('User',usersSchema,'users');

module.exports = User;