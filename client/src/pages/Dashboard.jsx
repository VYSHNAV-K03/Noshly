import React from "react"; // Ensure this imports Tailwind CSS
import recipe1 from '../assets/recipe1.jpg';
import recipe2 from '../assets/recipe2.jpg';
import recipe3 from '../assets/recipe3.jpg';
import recipe4 from '../assets/recipe4.jpg';
import recipe5 from '../assets/recipe5.jpg';
import recipe6 from '../assets/recipe6.jpg';
import recipe7 from '../assets/recipe7.jpg';
import recipe8 from '../assets/recipe8.jpg';
import vlog1 from '../assets/mar.mp4';
import vlog2 from '../assets/mar.mp4';
import vlog3 from '../assets/mar.mp4';
import vlog4 from '../assets/mar.mp4';
import vlog5 from '../assets/mar.mp4';
import vlog6 from '../assets/mar.mp4';
import vlog7 from '../assets/mar.mp4';
import vlog8 from '../assets/mar.mp4';
const recipe = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8];
const vlog=[vlog1,vlog2,vlog3,vlog4,vlog5,vlog6,vlog7,vlog8];
function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900">
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-mint-200 to-white">
        <h2 className="text-5xl font-extrabold text-teal-700 mb-4">Discover, Share & Order Indian Food</h2>
        <p className="text-xl text-gray-700 mb-8">Join a vibrant community of food lovers and explore the best of Indian cuisine.</p>
        <div className="space-x-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-bold">Explore Recipes</button>
          <button className="bg-teal-500 hover:bg-mint-600 text-white px-6 py-3 rounded-full font-bold">Order Food Now</button>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 rounded-full font-bold">Join the Community</button>
        </div>
      </section>

      {/* Trending Recipes Section */}
      <section id="recipes" className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-teal-600 mb-8">Trending Recipes of the Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {recipe.map((recipe, index) => (
            <div key={index} className="flex flex-col items-center bg-gradient-to-r from-mint-300 via-teal-300 to-mint-400 p-6 rounded-lg shadow-md">
              <img src={recipe} alt={`recipe ${index + 1}`} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold">Recipe {index + 1}</h4>
              <p className="text-gray-700">Prep Time: 30 mins | Likes: {200 + index * 10}</p>
              <a
                    href="/recipe" // Replace with your desired URL or route
                     className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-full inline-block text-center"
                 >
              view recipe
            </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Food Vlogs Section */}
      <section id="vlogs" className="py-16 bg-gradient-to-r from-teal-300 to-mint-300">
        <h3 className="text-3xl font-bold text-center text-teal-700 mb-8">Watch & Learn from the Best</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {vlog.map((vlogSrc, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <video className="w-full h-48 rounded-lg mb-4" controls>
                <source src={vlogSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h4 className="text-xl font-semibold">Vlog {index + 1}</h4>
              <p className="text-gray-700">By Chef {`Name ${index + 1}`}</p>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-full"
                onClick={() => window.open(vlogSrc, '_blank')}
              >
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section id="restaurants" className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-teal-600 mb-8">Discover Restaurants Near You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {recipe.map((recipe, index) => (
            <div key={index} className="flex flex-col items-center bg-gradient-to-r from-teal-300 to-mint-300 p-6 rounded-lg shadow-md">
              <img src={recipe} alt={`Restaurant ${index + 1}`} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold">Restaurant {index + 1}</h4>
              <p className="text-gray-700">Rating: {4 + (index % 2) * 0.5} Stars</p>
            
            
            
            

               <a
                    href="/order" // Replace with your desired URL or route
                     className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-full inline-block text-center"
                 >
      Order Now
    </a>


            </div>
          ))}
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

export default Dashboard;