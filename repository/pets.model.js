var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
	name: String,
	animal: String,
	description: String,
	dateOfBirth: Date,
	acquiredOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pet', petSchema, 'pets');
