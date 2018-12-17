const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());
mongoose.connect('mongodb://localhost:27017/meanauth',(err)=>{
    if(err) throw err;
    console.log('connected to database');
});

const Schema = mongoose.Schema;
 
const UploadImageSchema = new Schema({
    link: {
        type:Array,
        required:true
    },
    postId:{
        type:String,
        required:true
    }
});

const UploadImage=mongoose.model('UploadImages', UploadImageSchema);

app.use(express.static('./uploads'));


//Set storage Engine
const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename:(req,file,cb)=>{
        file.originalname=file.originalname.replace(' ','_');
        console.log(file.originalname);
        cb(null,file.fieldname+'-'+file.originalname.split('.')[0]+Date.now()+path.extname(file.originalname));
    }
})

//init upload
const upload=multer({
    storage:storage
}).array('uploads[]',12);

app.post('/upload',(req,res)=>{
    
    upload(req,res,function(err){
        console.log(req.files);
        if(err){
             res.json({success:false,msg:err});
             return;
        }

        let newLinkArray=[];
        for(let i=0;i<req.files.length;i++){
            newLinkArray.push('http://localhost:3000/'+req.files[i].filename);
        }

        let newUploadFiles=new UploadImage({
            link:newLinkArray,
            postId:'fdsafasd'
        })

        newUploadFiles.save((err,post)=>{
            if(err) return res.json({success:false, msg:'failed to save database'});
            res.json({success:true,post:post});
        })
    });
});


app.get('/posts',(req,res)=>{
    UploadImage.find({},(err, posts)=>{
        if(err) return res.json({success:false, msg:'failed to get posts'});
        res.json({success:true, posts:posts});
    }).sort({_id:-1})
})