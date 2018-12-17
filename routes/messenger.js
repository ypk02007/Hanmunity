const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Together = require('../models/together'); 
const Message = require('../models/message');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/writeMessage', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  const h = date.getHours()
  const min = date.getMinutes();
  //if(min<10)
    //min = "0"+min;
  const newMessage = new Message({
    index: req.body.index,
    writer: req.body.writer,
    content: req.body.content,
    time: y + "/" + m + "/" + d + " " + h + ":" + min
  });

  Message.addMessage(newMessage, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.post('/messageList', (req, res, next) => {
  const id = req.body.id;
  Message.getMessage (id, (err, message) => {
   res.json({message: message});
  });
});

router.post('/writeTogether', function(req, res, next) {
  const newTogether = new Together({
    title: req.body.title
  });

  Together.addTogether(newTogether, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.get('/togetherList', (req, res, next) => {
  Together.getTogetherAll ((err, together) => {
   res.json({together: together});
  });
});

//==================================================>

module.exports = router;