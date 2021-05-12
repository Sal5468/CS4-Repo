

var mongoose = require("mongoose");

var Home = mongoose.model("Home",{
	id: {
		required: true,
		unique: true,
		type:Number
	},
	style: String,
	cost:Number,
	view: Boolean
});

module.exports = Home;
