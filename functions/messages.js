var mongoose = require('mongoose');
var request = require('request');
var message = require('../models/message');
var device = require('../models/device');
var constants = require('../constants/constants.json');

exports.message = function(deviceId, body_message, registrationId, callback) {

    var newMessage = new message({
        
        deviceId : deviceId,
        body : body_message,
        registrationId : registrationId

    });

    device.find({registrationId : registrationId}, function(err, devices) {
        var totalDevices = devices.length;
        if(totalDevices > 0) {
            newMessage.save(function(err) {
                if(!err) {
                    callback(newMessage.body_message);
                } else {
                    callback(constants.error.msg_reg_failure);
                }
            });
        } else {
            callback("register first");
        }

    });
}