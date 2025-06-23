import React, { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

const API_KEY = "tiiEWQFzyYsXs2PeqsMiNCv0v99xYGTRq69XWiQs"; // Replace with your actual Cohere API key

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!ingredients) return;
    setLoading(true);
    setError("");
    setRecipes([]);
    setSelectedRecipe(null);
    
    try {
      const response = await axios.post(
        "https://api.cohere.ai/v1/generate",
        {
          model: "command-r-plus",
          prompt: `Suggest 5 best Indian recipes using the following ingredients: ${ingredients}. Provide only the recipe titles in a structured list format.`,
          max_tokens: 200,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (!response.data.generations || response.data.generations.length === 0) {
        throw new Error("No valid recipe suggestions found.");
      }
      
      const recipeNames = response.data.generations[0].text.split("\n").filter(name => name.trim() !== "");
      
      setRecipes(recipeNames.slice(0, 5)); // Only take the top 5 recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(error.response?.data?.message || error.message || "Failed to fetch recipes.");
    }
    setLoading(false);
  };

  const fetchRecipeDetails = async (recipeName) => {
    setLoading(true);
    setError("");
    setSelectedRecipe(null);
    
    try {
      const response = await axios.post(
        "https://api.cohere.ai/v1/generate",
        {
          model: "command-r-plus",
          prompt: `Provide detailed instructions for the Indian recipe: ${recipeName}. Include ingredients and step-by-step instructions in a structured format.`,
          max_tokens: 700,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (!response.data.generations || response.data.generations.length === 0) {
        throw new Error("No recipe details found.");
      }
      
      setSelectedRecipe({ name: recipeName, details: response.data.generations[0].text });
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setError(error.response?.data?.message || error.message || "Failed to fetch recipe details.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Frame - Search Bar & Recipe List */}
      <div className="w-1/3 p-8 flex flex-col items-start bg-gray-800">
        <h1 className="text-4xl font-bold text-green-400 mb-6">🍽 AI Recipe Generator</h1>
        <p className="text-gray-400 text-lg mb-4">Enter ingredients you have, and we'll suggest 5 best Indian recipes for you!</p>
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none"
          placeholder="E.g., Tomato, Cheese, Paneer"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button
          onClick={fetchRecipes}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-full"
        >
          <Search size={20} /> Find Recipes
        </button>
        
        {loading && <p className="text-gray-400 mt-6">Loading recipes...</p>}
        {error && <p className="text-red-400 mt-4">{error}</p>}
        
        <div className="mt-6 space-y-4">
          {recipes.map((recipe, index) => (
            <button
              key={index}
              onClick={() => fetchRecipeDetails(recipe)}
              className="w-full text-left p-3 bg-gray-700 rounded-lg text-green-400 hover:bg-gray-600"
            >
              {recipe}
            </button>
          ))}
        </div>
      </div>
      
      {/* Right Frame - Recipe Details */}
      <div className="w-2/3 p-8 overflow-auto">
        {selectedRecipe ? (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-600">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">{selectedRecipe.name}</h3>
            <p className="text-gray-300 text-sm whitespace-pre-wrap">{selectedRecipe.details}</p>
          </div>
        ) : (
          <p className="text-gray-400">Click on a recipe name to see its details.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeGenerator;