const express = require("express");
const multer = require("multer");
const Post = require("../models/Post");
const upload = require("../middleware/multer");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Product = require("../models/Product");
const Like = require("../models/Like");

const router = express.Router();


// 📌 Create a Post (with Image/Video Upload)
router.post("/create",auth, upload.single("file"), async (req, res) => {
  try {
    const {  caption, type ,recipeId, recipeName } = req.body;
    const src = req.file ? `${req.file.path}` : null;

    if ( !caption || !type || !src) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPost = new Post({
      userId: req.user.userId, 
      caption, type, 
      src,
      recipe: { id: recipeId, name: recipeName }

     });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// 📌 Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});


router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await User.find({ role: "restaurant" }).select("name _id");
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Product.find().select("name _id");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// 📌 Like a Post
router.put("/like/:postId",auth, async (req, res) => {
  
  const { userId } = req.user;  // Assuming userId is sent in the request body
  const { postId } = req.params;

  const post = await Post.findById(postId);
      const likes = await Like.find();

      console.log(post);
      console.log(likes);
  
  try {
    const existingLike = await Like.findOne({ userId, postId });
    
    if (existingLike) {
          console.log("POST");
          // Unlike: Remove like & decrement count
          await Like.deleteOne({ userId, postId });
          await Post.findByIdAndUpdate(postId, { $inc: { likesCount: -1 } });

          return res.json({ success: true, message: "Like removed" });
      } else {
        console.log("Get");

          // Like: Add new like & increment count
          await Like.create({ userId, postId });
          await Post.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } });

          return res.json({ success: true, message: "Like added" });
      }
      


      

  } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
  }

});




// 📌 Add a Comment
router.post("/comment/:id", async (req, res) => {
  try {
    const { user, text } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.comments.push({ user, text });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
