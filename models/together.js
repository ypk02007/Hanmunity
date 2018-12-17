const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Study Schema
const TogetherSchema = mongoose.Schema({
  title: {
    type: String
  }
});

const Together = module.exports = mongoose.model('Together', TogetherSchema);

module.exports.getTogetherById = function(id, callback){
  Together.findById(id, callback);
}

module.exports.getTogetherByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}};
  Together.find(query, callback).sort({"_id":-1});
}

module.exports.getTogetherAll = function(callback){
  Together.find(callback);
}

module.exports.addTogether = function(newTogether, callback){
  newTogether.save(callback);
}

module.exports.deleteTogether = function(id, callback){
  const query = {_id: id};
  Together.remove(query, callback);
}