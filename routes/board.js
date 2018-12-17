const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Study = require('../models/study');
const Question = require('../models/question');
const Petition = require('../models/petition');
const PetitionClick = require('../models/petitionClick');
const Comment = require('../models/comment');

const Message = require('../models/message');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/writeStudy', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();

  const up = req.body.update;
  const newStudy = new Study({
    title: req.body.title,
    date: y + "/" + m + "/" + d,
    writer: req.body.writer,
    content: req.body.content
  });

  if(up.length<1) {
    Study.addStudy(newStudy, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to write', err: err});
      } else {
        res.json({success: true, msg:'Success'});
      }
    });
  } else {
    Study.updateOne({_id: up}, {title: req.body.title, content: req.body.content}, function(err) {
      if(err) {
        res.json({success: false, msg:'Failed to update', err: err});
      } else {
        res.json({success: true, msg:'Success'});
      }
    })
  }
});

router.post('/writeQuestion', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();

  const up = req.body.update;
  const newQuestion = new Question({
    title: req.body.title,
    date: y + "/" + m + "/" + d,
    writer: req.body.writer,
    content: req.body.content
  });

  if(up.length<1) {
    Question.addQuestion(newQuestion, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to write', err: err});
      } else {
        res.json({success: true, msg:'Success'});
      }
    });
  } else {
    Question.updateOne({_id: up}, {title: req.body.title, content: req.body.content}, function(err) {
      if(err) {
        res.json({success: false, msg:'Failed to update', err: err});
      } else {
        res.json({success: true, msg:'Success'});
      }
    })
  }
});

router.post('/writePetition', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  const newPetition = new Petition({
    title: req.body.title,
    date: y + "/" + m + "/" + d,
    content: req.body.content,
    max: req.body.max
  });

  Petition.addPetition(newPetition, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.post('/upPetition', function(req, res, next) {
  const newPetitionClick = new PetitionClick({
    index: req.body.index,
    anonymous: req.body.anonymous
  });

  PetitionClick.addPetitionClick(newPetitionClick, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.post('/writeComment', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  const newComment = new Comment({
    index: req.body.index,
    date: y + "/" + m + "/" + d,
    writer: req.body.writer,
    content: req.body.content
  });

  Comment.addComment(newComment, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.get('/studyList', (req, res, next) => {
  Study.getStudyAll ((err, study) => {
	 res.json({study: study});
  });
});

router.get('/questionList', (req, res, next) => {
  Question.getQuestionAll ((err, question) => {
	 res.json({question: question});
  });
});

router.get('/petitionList', (req, res, next) => {
  Petition.getPetitionAll ((err, petition) => {
   res.json({petition: petition});
  });
});

router.post('/PetitionClickList', (req, res, next) => {
  const id = req.body.id;
  PetitionClick.getPetitionClick (id, (err, petitionClick) => {
   res.json({petitionClick: petitionClick});
  });
});

router.post('/PetitionClickCheck', (req, res, next) => {
  const index = req.body.index;
  const anonymous = req.body.anonymous;
  PetitionClick.getPetitionClickByUser (index, anonymous, (err, checkClick) => {
   res.json({checkClick: checkClick});
  });
});

router.post('/commentList', (req, res, next) => {
  const id = req.body.id;
  Comment.getComment (id, (err, comment) => {
   res.json({comment: comment});
  });
});

router.post('/search', (req, res, next) => {
  const title = req.body.keyword;
  const board = req.body.board;

  if(board==1) {
    Study.getStudyByTitle (title, (err, study) => {
     res.json({study: study});
    });
  } else if(board==2) {
    Question.getQuestionByTitle (title, (err, question) => {
     res.json({question: question});
    });
  } else if(board==4) {
    Petition.getPetitionByTitle (title, (err, petition) => {
     res.json({petition: petition});
    });
  }
});

router.post('/deleteComment', (req, res, next) => {
  const id = req.body.id;
  Comment.deleteComment (id, (err, comment) => {
    if(err){
      res.json({success: false, msg:'Failed to delete', err: err});
    } else {
      res.json({success: true, msg:'Success'})
    }
  });
});

router.post('/deleteStudy', (req, res, next) => {
  const id = req.body.id;
  Study.deleteStudy (id, (err, study) => {
    if(err){
      res.json({success: false, msg:'Failed to delete', err: err});
    } else {
      res.json({success: true, msg:'Success'})
    }
  });
});

router.post('/deleteQuestion', (req, res, next) => {
  const id = req.body.id;
  Study.deleteQuestion (id, (err, question) => {
    if(err){
      res.json({success: false, msg:'Failed to delete', err: err});
    } else {
      res.json({success: true, msg:'Success'})
    }
  });
});


module.exports = router;