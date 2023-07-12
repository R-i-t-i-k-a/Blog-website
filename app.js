const express = require("express");
const bP = require("body-parser");
const _=require("lodash");
const mongoose=require("mongoose");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/blogPostDB");

const blogSchema=new mongoose.Schema({
  title:String,
  post:String
});

const Post=mongoose.model("Post",blogSchema);

app.set('view engine', 'ejs');

app.use(bP.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  Post.find({}).then(function(posts){
    res.render("home",{
      homeContent:homeStartingContent,
      posts:posts
    });
  });
});

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent})
})

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent})
})

app.get("/compose",function(req,res){
  res.render("compose");
})

app.get("/posts/:postId",function(req,res){
  const reqPId=req.params.postId;
  console.log(reqPId);
  Post.findOne({_id:reqPId}).then(function(post){
    res.render("post",{
      title:post.title,
      post:post.post,
      id:post._id
    });
  });
});

app.post("/delete",function(req,res){
  const id=req.body.id;
  Post.deleteOne({_id:id}).then(function(){
    console.log("Post deleted successfully!");
    res.redirect("/");
  })
});

app.post("/compose",function(req,res){
  const post=new Post({
    title:req.body.titleArea,
    post:req.body.postArea,
  });
  post.save().then(function(){
    res.redirect("/");
  }).catch(function(err){
    console.log(err);
  });
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
