const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Study Schema
const PetitionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  max: {
    type: Number
  }
});

const Petition = module.exports = mongoose.model('Petition', PetitionSchema);

module.exports.getPetitionById = function(id, callback){
  Petition.findById(id, callback);
}

module.exports.getPetitionByTitle = function(title, callback){
  const query = {title:{$regex: title, $options: "$i"}}
  Petition.find(query, callback).sort({"_id":-1});
}

module.exports.getPetitionAll = function(callback){
  Petition.find(callback).sort({"_id":-1});
}

module.exports.addPetition = function(newPetition, callback){
  newPetition.save(callback);
}