const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const StudySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  writer: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
});

const Study = module.exports = mongoose.model('Study', StudySchema);

module.exports.getStudyById = function(id, callback){
  Study.findById(id, callback);
}

module.exports.getStudyByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}};
  Study.find(query, callback).sort({"_id":-1});
}

module.exports.getStudyAll = function(callback){
  Study.find(callback).sort({"_id":-1});
}

module.exports.addStudy = function(newStudy, callback){
  newStudy.save(callback);
}

module.exports.deleteStudy = function(id, callback){
  const query = {_id: id};
  Study.remove(query, callback);
}