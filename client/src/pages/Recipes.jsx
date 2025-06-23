import React, { useEffect, useState } from "react";
import axiosInstance, { apiUrl } from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [allRecipes, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/customers/products'); // Replace with your endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render product grid
  console.log(allRecipes);
  


  // Example of all available recipes
  // const allRecipes = [
  //   {
  //     id: 1,
  //     name: "Paneer Butter Masala",
  //     image: PaneerButterImage,
  //     description: "A creamy, rich, and flavorful North Indian delicacy.",
  //   },
  //   {
  //     id: 2,
  //     name: "Butter Chicken",
  //     image: ButterChickenImage,
  //     description: "A deliciously creamy and spiced chicken curry.",
  //   },
  //   {
  //     id: 3,
  //     name: "Biryani",
  //     image: BiryaniImage,
  //     description: "A flavorful and aromatic rice dish with mixed spices.",
  //   },
  // ];

  // Filter the recipes based on the search query
  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-white-100 via-teal-300 to-teal-500 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 text-white py-6 px-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Noshly</h1>
      </header>

      {/* Search Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Discover Your Next Favorite Recipe</h2>
        <div className="flex justify-center gap-6">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-6 py-4 rounded-xl text-gray-800 focus:outline-teal focus:ring-7 focus:ring-teal-300 w-80 md:w-96 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
          <button
            onClick={() => {}}
            className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-500 shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>
        <div className="space-y-12">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="flex flex-col sm:flex-row items-center justify-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={apiUrl + recipe.image[0]}
                  alt={recipe.name}
                  className="w-48 h-48 object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-6 transform hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-teal-600 mb-2">{recipe.name}</h3>
                  <p className="text-gray-600 text-lg mb-4">{recipe.description}</p>
                  <button onClick={() => {navigate(`/recipe/${recipe._id}`)}} className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-500 transition duration-300">
                    Order Recipe
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No recipes found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white py-6 mt-12 shadow-lg">
        <p className="text-center font-medium">© 2025 Noshly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Recipes;
