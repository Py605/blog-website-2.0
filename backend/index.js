// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require("cors");
// const app = express();
// app.set('view engine','ejs');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('public'));



import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const itemSchema = {
  title:String,
  content:String
} 

const Item = mongoose.model("Item",itemSchema);

const item1 = new Item({
  title:"Home",
  content:"Hey Guys & Girls, This is my First Blog Website. You can also make a new Post by going on :- localhost:4000/compose in the Search Bar...Have a Good Day!!"
});
// item1.save();

app.get("/api",function(req,res){
  req.json(itemSchema)
})

app.post('/register',function(req,res){
  // res.send("<h1>Hello There</h1>")
  console.log(req.body);
  const item = new Item({
    title: req.body.title,
    content : req.body.content
  });
  item.save();
  
    Item.find({},function(err,item){
      console.log(item)
    })
  
  // res.render('home',{posts:posts, home: home})
});



// app.post('/compose',function(req,res){
//   var post = {
//     title:  req.body.title,
//     post: req.body.post
//   };
//   posts.push(post);
//   // res.redirect('/',{posts:posts, home: home})
// })

    {/*  */}

app.listen(4000,function(){
  console.log('Server started at port 4000.');
})