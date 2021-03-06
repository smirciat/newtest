'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollsSchema = new Schema({
  name: String,
  ownerId: String,
  options: [{option:String, index:Number}],
  results: [{count:Number}],
  votedIPs: [{IP:String}]
});

module.exports = mongoose.model('Polls', PollsSchema);