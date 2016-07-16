var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalType = ['cat', 'dog'];

var petSchema = new Schema({
	name: String,
	animal: { type: String, enum: animalType },
	description: String,
	dateOfBirth: Date,
	acquiredOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pet', petSchema, 'pets');
