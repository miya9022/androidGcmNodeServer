var constants = require('../constants/constants.json');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deviceSchema = mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String
	
});

mongoose.connect(constants.mongo_db_server + 'node-android-push');

module.exports = mongoose.model('device', deviceSchema);       