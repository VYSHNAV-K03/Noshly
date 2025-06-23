import React, { useState } from "react";

function Reup() {
  const [recipe, setRecipe] = useState({
    id: "", // Unique ID
    name: "",
    ingredients: "",
    steps: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe uploaded:", recipe);
    alert("Recipe uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">Upload a Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Recipe ID</label>
            <input
              type="text"
              name="id"
              value={recipe.id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Recipe Name</label>
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Ingredients</label>
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Steps</label>
            <textarea
              name="steps"
              value={recipe.steps}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Upload Image</label>
            <input type="file" onChange={handleImageChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Upload Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reup;