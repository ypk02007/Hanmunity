const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const QuestionSchema = mongoose.Schema({
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

const Question = module.exports = mongoose.model('Question', QuestionSchema);

module.exports.getQuestionById = function(id, callback){
  Question.findById(id, callback);
}

module.exports.getQuestionByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}};
  Question.find(query, callback).sort({"_id":-1});
}

module.exports.getQuestionAll = function(callback){
  Question.find(callback).sort({"_id":-1});
}

module.exports.addQuestion = function(newQuestion, callback){
  newQuestion.save(callback);
}

module.exports.deleteQuestion = function(id, callback){
  const query = {_id: id};
  Question.remove(query, callback);
}