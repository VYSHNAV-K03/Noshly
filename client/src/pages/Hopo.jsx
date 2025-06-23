import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Send, Bookmark, Utensils, PlusCircle } from "lucide-react";
import axiosInstance, { apiUrl } from "../axiosInstance";

// const restaurants = ["Tandoori Junction", "Spice House", "Curry Delight", "Royal Biryani", "Indian Aroma"];
 //const popularRecipes = ["Butter Chicken", "Masala Dosa", "Chole Bhature", "Pani Puri", "Rogan Josh"];

function Hopo() {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState({});
  const [posts, setPosts] = useState([]);
  const [restaurants, setRestaurants] = useState([])
  const [popularRecipes, setRecipes] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({ user: "", caption: "", file: null, type: "image" });
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));
  const [selectedRecipe, setSelectedRecipe] = useState({ id: "", name: "" });
  const [showCommentBox, setShowCommentBox] = useState({});
  const [commentText, setCommentText] = useState({});
  
  useEffect(() => {
    axiosInstance.get("/posts").then((res) => {
      setPosts(res.data);
      const initialLikes = {};
      const initialComments = {};
      res.data.forEach((post) => {
        initialLikes[post._id] = post.likes.includes(user._id);
        initialComments[post._id] = post.comments || [];
      });
      setLikedPosts(initialLikes);
    });


    axiosInstance.get("/posts/restaurants").then((res) => setRestaurants(res.data));
    axiosInstance.get("/posts/recipes").then((res) => setRecipes(res.data));
  }, []);

  const toggleLike = async (postId) => {
    try {
      setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));

      const res = await axiosInstance.put(`/posts/like/${postId}`, { userId: user._id });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: res.data.likes } : post
        )
      );
      window.location.reload();
    } catch (error) {
      console.error("Error liking post", error);
      setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
    }
  };
  const handleCommentSubmit = async (postId) => {
    if (!commentText[postId]) return;
    try {
      const res = await axiosInstance.post(`/posts/comment/${postId}`, {
        user: user.name,
        text: commentText[postId],
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? { ...post, comments: res.data.comments } : post))
      );
      setCommentText((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost((prev) => ({ ...prev, file, type: file.type.startsWith("video") ? "video" : "image" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user", newPost.user);
    formData.append("caption", newPost.caption);
    formData.append("type", newPost.type);
    formData.append("file", newPost.file);
    formData.append("recipeId", selectedRecipe.id);
    formData.append("recipeName", selectedRecipe.name); 

    try {
      const res = await axiosInstance.post("/posts/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPosts([res.data, ...posts]);
      setShowModal(false);
    } catch (error) {
      console.error("Error uploading post", error);
    }
  };
  

  console.log({ posts,popularRecipes,restaurants });
  

  return (
    <div className="bg-rose-200 min-h-screen flex justify-center py-30 relative">
      <div className="w-1/4 p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Restaurants</h2>
        <ul>{restaurants.map((restaurant, index) => (<li key={index} className="py-2 text-gray-700 font-medium">{restaurant.name}</li>))}</ul>
      </div>

      <div className="w-full max-w-[4700px] overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-gray-200 h-screen">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-3 mb-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-500 rounded-full mr-2">
                <img src={apiUrl + user.logo} alt="User" className="w-full h-full rounded-full" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{user.name}</h3>
            </div>
            {post.type === "image" ? (
              <img src={apiUrl + post.src} alt="Post" className="w-full h-[600px] object-cover rounded-md" />
            ) : (
              <video src={ apiUrl + post.src} controls className="w-full h-[600px] object-cover rounded-md"></video>
            )}
            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex space-x-4">
                <button onClick={() => toggleLike(post._id)} className={`text-sm ${likedPosts[post._id] ? "text-red-500" : "text-gray-500"}`}>
                  <Heart size={20} />
                </button>
                <button onClick={() => setShowCommentBox((prev) => ({ ...prev, [post._id]: !prev[post._id] }))} className="text-gray-500 text-sm">
                  <MessageCircle size={20} />
                </button>
                <button className="text-gray-500 text-sm"><Send size={20} /></button>
              </div>
              <button className="text-gray-500 text-sm"><Bookmark size={20} /></button>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <button className="text-gray-600 flex items-center hover:text-teal-500" onClick={() => navigate(`/recipe/${post.recipe?.id}`)}>
                <Utensils className="mr-1" size={16} /> Recipe
              </button>
            </div>
            <p className="mt-2 text-gray-700 font-semibold text-sm">{post.likesCount} likes</p>

            {showCommentBox[post._id] && (
              <div className="mt-2">
                {post.comments.length > 0 && (
                  <p className="text-gray-600 text-sm"><span className="font-bold">{post.comments[post.comments.length - 1].user}</span> {post.comments[post.comments.length - 1].text}</p>
                )}
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Add a comment..."
                  value={commentText[post._id] || ""}
                  onChange={(e) => setCommentText({ ...commentText, [post._id]: e.target.value })}
                />
                <button onClick={() => handleCommentSubmit(post._id)} className="bg-gray-500 text-white p-2 rounded mt-2">
                  Comment
                </button>
              </div>
            )}
          









            <p className="text-gray-600 text-sm"><span className="font-bold">{post.user}</span> {post.caption}</p>
          </div>
        














        ))}
      </div>

      <div className="w-1/4 p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Popular Recipes</h2>
        {popularRecipes
    .filter((recipe, index, self) => 
      index === self.findIndex((r) => r.name === recipe.name)
    )
    .map((recipe, index) => (
      <li key={index} className="py-2 text-gray-700 font-medium">{recipe.name}</li>
    ))}      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-500/50 backdrop-blur-md p-10 flex justify-around items-center text-white shadow-lg"></div>
      <button onClick={() => setShowModal(true)} className="fixed bottom-3 center-10 bg-gray-500 text-white p-3 rounded-full shadow-lg">
        <PlusCircle size={24} />
      </button>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create Post</h2>
            <form onSubmit={handleSubmit}>
              <textarea placeholder="Caption" className="w-full p-2 border rounded mb-2" onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })} required></textarea>
              <select
                className="w-full p-2 border rounded mb-2"
                onChange={(e) => {
                  const selected = popularRecipes.find(recipe => recipe._id === e.target.value);
                  setSelectedRecipe({ id: selected._id, name: selected.name });
                }}
                required
              >
                <option value="">Select a Recipe</option>
                {popularRecipes.map((recipe) => (
                  <option key={recipe._id} value={recipe._id}>{recipe.name}</option>
                ))}
              </select>
              <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="mb-4" required />
              <div className="flex justify-between">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-300 p-2 rounded">Cancel</button>
                <button type="submit" className="bg-gray-500 text-white p-2 rounded">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Hopo;
