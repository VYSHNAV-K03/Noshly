const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String,ref:'User' }, // Username
    caption: { type: String, required: true },
    type: { type: String, enum: ["image", "video"], required: true },
    src: { type: String, required: true }, // URL of the uploaded file
    likesCount: { type: Number, default: 0 },
    comments: [
      {
        user: String,
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    recipe: { 
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
      name: { type: String } 
    }, // Recipe selection
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
