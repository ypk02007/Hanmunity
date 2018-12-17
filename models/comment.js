const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Study Schema
const CommentSchema = mongoose.Schema({
  index: {
    type: String
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

const Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.getComment = function(id, callback){
  const query = {index: id};
  Comment.find(query, callback);
}

module.exports.getCommentByWriter = function(writer, callback){
  const query = {writer:{$regex: writer, $options: "$i"}};
  Comment.find(query, callback);
}

module.exports.getCommentAll = function(callback){
  Comment.find(callback);
}

module.exports.addComment = function(newComment, callback){
  newComment.save(callback);
}

module.exports.deleteComment = function(id, callback){
  const query = {_id: id};
  Comment.remove(query, callback);
}