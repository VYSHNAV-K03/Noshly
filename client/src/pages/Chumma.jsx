import React from "react";
import { Heart, MessageCircle, Send, Bookmark, ShoppingBag, Utensils } from "lucide-react";

const posts = [
  {
    id: 1,
    username: "foodie_lover",
    userImg: "https://randomuser.me/api/portraits/women/44.jpg",
    postImg: "https://source.unsplash.com/600x400/?food",
    caption: "Delicious homemade pasta! 🍝",
    likes: 120,
    comments: 34,
  },
  {
    id: 2,
    username: "spice_master",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg",
    postImg: "https://source.unsplash.com/600x400/?spices",
    caption: "Spices that bring flavors to life! 🌶️✨",
    likes: 95,
    comments: 21,
  },
];

const Chumma = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="w-full max-w-xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md mb-6 p-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-4">
              <img src={post.userImg} alt="user" className="w-10 h-10 rounded-full" />
              <h3 className="font-semibold text-gray-800">{post.username}</h3>
            </div>
            
            {/* Post Image */}
            <img src={post.postImg} alt="post" className="w-full rounded-lg" />
            
            {/* Actions */}
            <div className="flex justify-between items-center mt-3 px-2">
              <div className="flex space-x-4">
                <button className="hover:text-purple-500"><Heart size={24} /></button>
                <button className="hover:text-purple-500"><MessageCircle size={24} /></button>
                <button className="hover:text-purple-500"><Send size={24} /></button>
              </div>
              <button className="hover:text-purple-500"><Bookmark size={24} /></button>
            </div>
            
            {/* Extra Buttons */}
            <div className="flex justify-start space-x-4 mt-3 px-2">
              <button className="flex items-center space-x-2 bg-teal-500 text-white px-3 py-2 rounded-lg hover:bg-teal-600 transition">
                <Utensils size={20} /> <span>Recipe</span>
              </button>
              <button className="flex items-center space-x-2 bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition">
                <ShoppingBag size={20} /> <span>Buy</span>
              </button>
            </div>
            
            {/* Caption & Stats */}
            <p className="mt-3 text-gray-700 font-medium px-2">{post.caption}</p>
            <p className="text-sm text-gray-500 px-2">{post.likes} likes • {post.comments} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chumma;
