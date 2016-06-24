var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({ 

	deviceId : String,
	body : String,
	registrationId : String
	
});

//mongoose.connect('mongodb://localhost:27017/node-android-push');

module.exports = mongoose.model('message', messageSchema);       