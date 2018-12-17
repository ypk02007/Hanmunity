const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Study Schema
const MessageSchema = mongoose.Schema({
  index: {
    type: String
  },
  writer: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  time: {
    type: String
  }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getMessageById = function(id, callback){
  Message.findById(id, callback);
}

module.exports.getMessageByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}};
  Message.find(query, callback).sort({"_id":-1});
}

module.exports.getMessageAll = function(callback){
  Message.find(callback);
}

module.exports.getMessage = function(id, callback){
  const query = {index: id};
  Message.find(query, callback);
}

module.exports.addMessage = function(newMessage, callback){
  newMessage.save(callback);
}

module.exports.deleteMessage = function(id, callback){
  const query = {_id: id};
  Message.remove(query, callback);
}