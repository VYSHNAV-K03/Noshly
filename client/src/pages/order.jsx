import React from "react";

function OrderFood() {
  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900 min-h-screen">
      
      {/* Page Header */}
      <header className="bg-teal-600 text-white py-6 shadow-md">
        <h1 className="text-4xl font-extrabold text-center">Order Indian Food</h1>
        <p className="text-center text-xl mt-2">Delicious meals delivered to your door</p>
      </header>

      {/* Restaurant Listings Section */}
      <section id="restaurants" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Choose Your Favorite Restaurant</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-teal-300 to-mint-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`restaurant${index + 1}.jpg`}
                alt={`Restaurant ${index + 1}`}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">Restaurant {index + 1}</h3>
              <p className="text-gray-700">Cuisine: Indian | Rating: {4 + (index % 2) * 0.5} Stars</p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-full">
                View Menu
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="dishes" className="py-16 bg-gradient-to-b from-mint-200 to-white">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-mint-300 via-teal-300 to-mint-400 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`dish${index + 1}.jpg`}
                alt={`Dish ${index + 1}`}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">Dish {index + 1}</h3>
              <p className="text-gray-700">Price: ₹{200 + index * 50}</p>
              <button className="bg-teal-400 hover:bg-teal-500 text-black px-4 py-2 mt-4 rounded-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Summary Section */}
      <section id="cart" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Your Cart</h2>
        <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-teal-600 mb-4">Order Summary</h3>
          <ul className="divide-y divide-gray-300">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <span className="text-gray-700">Dish {index + 1}</span>
                <span className="text-gray-700">₹{200 + index * 50}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-bold text-gray-800">Total:</span>
            <span className="text-lg font-bold text-gray-800">₹750</span>
          </div>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 mt-4 rounded-full font-bold">
            Proceed to Checkout
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-6">
        <div className="text-center">
          <p>&copy; 2025 Noshly. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default OrderFood;