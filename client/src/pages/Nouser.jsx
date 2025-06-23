import React from "react";

function Nouser() {
  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900">
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-mint-200 to-white">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-4">Discover, Share & Order Indian Food</h2>
        <p className="text-xl text-gray-700 mb-8">Join our community to unlock the best of Indian cuisine!</p>
        
      </section>

      {/* Limited Access Section */}
      <section className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-teal-600 mb-8">Explore Limited Features</h3>
        <div className="text-center px-6">
          <p className="text-lg text-gray-700 mb-8">
            Get a glimpse of our amazing features! Log in or sign up to unlock full access to trending recipes, exclusive food vlogs, and top-rated restaurants.
          </p>
        </div>
      </section>

      {/* Placeholder Content for Recipes */}
      <section id="recipes" className="py-16 bg-gradient-to-b from-mint-200 to-mint-300">
        <h3 className="text-3xl font-bold text-center text-teal-700 mb-8">Trending Recipes (Preview)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col items-center bg-gradient-to-r from-mint-300 via-teal-300 to-mint-400 p-6 rounded-lg shadow-md">
              <img
                src={`recipe-preview${index + 1}.png`}
                alt={`Preview Recipe ${index + 1}`}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h4 className="text-xl font-semibold">Preview Recipe {index + 1}</h4>
              <p className="text-gray-700">Sign in to view the full recipe and details!</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="text-center px-6">
          <p className="text-lg text-gray-700 mb-8">
            Ready to dive into a world of delicious Indian food? Don’t miss out—join us today!
          </p>
          
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

export default Nouser;
