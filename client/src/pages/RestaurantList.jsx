import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, [location]);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.post("/restaurants", { location });
      setRestaurants(res.data);
    } catch (error) {
      console.error("Error fetching restaurants", error);
    }
  };

  const updateRating = async (id) => {
    const newRating = prompt("Enter new rating (1-5):");
    if (newRating) {
      await axios.put(`/restaurants/${id}/rate`, { rating: parseFloat(newRating) });
      fetchRestaurants();
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Restaurants</h2>
      <input
        type="text"
        placeholder="Search by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
            <img
              src={restaurant.logo ? `http://localhost:5000/${restaurant.logo}` : "https://media-cdn.tripadvisor.com/media/photo-s/1c/f7/73/b9/english-wine-from-our.jpg"}
              alt={restaurant.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{restaurant.name}</h3>
            <p className="text-gray-600">{restaurant.location.address}</p>
            {/* <button
              onClick={() => updateRating(restaurant._id)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Rate
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
