// npm install mail
const express = require("express");
const mongoose = require("mongoose");
const body = require("body-parser");
const cors = require("cors");
const _ = require("lodash");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// schema for blog
const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  imgsrc: String,
  tags: [],
  date: Date,
  content: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// schema for user
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

// for contact use mail

// get all the blogs on the home page
app.get("/", (req, res) => {
  Blog.find({}, (err, foundList) => {
    if (!err) {
      res.send(foundList);
    } else console.log(err);
  });
  // res.send("hi");
});

// upload the blog
app.post("/write", (req, res) => {
  const b = req.body;
  // console.log(b);
  res.send("done");
  const tagarr = b.tags;
  const arr = tagarr.split(",");
  arr.map((val) => (val = _.capitalize(val.trim())));
  b.author = _.capitalize(b.author);
  b.title = _.capitalize(b.title);
  const newBlog = new Blog({
    title: b.title,
    author: b.author,
    imgsrc: b.imgsrc,
    tags: arr,
    date: b.date,
    content: b.content,
  });
  Blog.insertMany([newBlog], (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.get("/tags/:tagName", (req, res) => {
  const tag = _.capitalize(req.params.tagName);
  Blog.find({ tags: tag }, (err, foundList) => {
    if (!err) {
      if (foundList.length > 0) {
        res.send(foundList);
      } else {
        console.log("no tagblogs found!!!");
      }
    } else console.log(err);
  });
});

app.get("/taglist", (req, res) => {
  Blog.find().distinct("tags", (err, foundList) => {
    if (!err) {
      res.send(foundList);
    } else console.log(err);
  });
});

app.get("/author/:authorName", (req, res) => {
  const author = _.capitalize(req.params.authorName);
  Blog.find({ tags: author }, (err, foundList) => {
    if (!err) {
      if (foundList.length > 0) {
        res.send(foundList);
      } else {
        console.log("no tagblogs found!!!");
      }
    } else console.log(err);
  });
});

// find specific blog
app.get("/blogs/:title", (req, res) => {
  const title = req.params.title;
  // console.log(title);
  Blog.findOne({ title: title }, (err, foundBlog) => {
    if (!err) {
      console.log(foundBlog);
      if (foundBlog) {
        res.send(foundBlog);
      } else {
        res.send("nothing");
      }
    } else console.log(err);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("the srever has started");
});
