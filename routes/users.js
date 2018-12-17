const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

router.post('/register', function(req, res, next) {
  var check = true;

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.findOne({username: req.body.username}, function(err, docs) {
    if(docs!=null) {
      check = false;
      res.json({success: false, msg:'이미 존재하는 아이디입니다.', err: err})
    }
  });

  User.findOne({email: req.body.email}, function(err, docs) {
    if(docs!=null) {
      check = false;
      res.json({success: false, msg:'이미 등록된 이메일입니다.', err: err})
    }
    if(check==true) {
    User.addUser(newUser, (err, user) => {
      if(err){
        res.json({success: false, msg:'회원가입에 실패했습니다.', err: err})
      } else {
        res.json({success: true, msg:'User registered'})
      }
    });
  }
  });
});

router.post('/find', function(req, res, next) {
  User.findOne({name: req.body.name, email: req.body.email}, function(err, docs) {
    if(docs==null) {
      check = false;
      res.json({success: false, msg:'정보가 맞지 않거나 존재하지 않는 계정입니다.', err: err})
    } else {
      const info = "아이디: " + docs.username + " 비밀번호: " + docs.password;
      res.json({success: true, msg: info})
    }
  });
});

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<

router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  User.getUserByUsername(username, (err, user) => {
    // if(err) throw err;
    if(!user) {
      return res.json({success:false, msg:'User not found'});
    }
    
    User.findOne({username: req.body.username, password: req.body.password}, (err, isMatch) => {
      // if(err) throw err;
      if(isMatch!=null) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    })
  })
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//==================================================>

module.exports = router;