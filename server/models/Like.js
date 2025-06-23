const mongoose = require('mongoose');

const Like = mongoose.model("Like", new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
}));


module.exports = Like