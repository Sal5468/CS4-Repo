
var mongoose = require("mongoose");

var Home = mongoose.model("Homes",{
	id: Number,
	style: String,
	cost: Number,
	view: Boolean
});

module.exports = Home;
