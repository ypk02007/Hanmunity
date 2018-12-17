const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Study Schema
const PetitionClickSchema = mongoose.Schema({
  index: {
    type: String
  },
  anonymous: {
    type: String
  }
});

const PetitionClick = module.exports = mongoose.model('PetitionClick', PetitionClickSchema);

module.exports.getPetitionClick = function(id, callback){
  const query = {index: id};
  PetitionClick.find(query, callback);
}

module.exports.getPetitionClickByUser = function(index, anonymous, callback){
  const query = {index: index, anonymous: anonymous};
  PetitionClick.find(query, callback);
}

module.exports.getPetitionClickByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}}
  PetitionClick.find(query, callback).sort({"_id":-1});
}

module.exports.getPetitionClickAll = function(callback){
  PetitionClick.find(callback).sort({"_id":-1});
}

module.exports.addPetitionClick = function(newPetitionClick, callback){
  newPetitionClick.save(callback);
}