import React from "react";
import bgg from "../assets/bgg.jpg";


function Home() {
  return (
    <div
      className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900 relative"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "250vh", // Full viewport height
      }}
    >
      {/* Slideshow Background Image Animation */}
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: "0",
          width: "100%",
          height: "60%",
          backgroundImage: `url(${bgg})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 0%, 100% 0%, 200% 0%",
          animation: "moveBackground 500s linear infinite",
        }}
      ></div>

      {/* Hero Section with Gap */}
      <section className="text-center py-20 bg-gradient-to-b from-mint-200 to-white z-10 relative" style={{ marginTop: "5cm" }}>
        <h1 className="text-4xl font-bold text-gray-800">
          Discover the Magic of Indian Flavors! 🌶️
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Dive into the world of exotic spices and vibrant dishes. Explore, create, and share Indian cuisine like never before.
        </p>
        <div className="mt-6">
          <a
            href="login"
            className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300"
          >
            Login now
          </a>


 {/* Features Section: Explore Noshly */}
 <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Noshly's Features
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Food Discovery</h3>
            <p className="text-lg text-gray-600">
              Browse through a vast collection of Indian recipes, ingredients, and authentic food blogs to discover new flavors.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Recipe Maker</h3>
            <p className="text-lg text-gray-600">
              Use our AI-powered recipe maker to create dishes based on the ingredients you already have at home!
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Food</h3>
            <p className="text-lg text-gray-600">
              Easily order delicious, authentic Indian food right to your doorstep from our wide range of partnered restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Noshly Description Section */}
      <section className="text-center py-16 bg-gradient-to-b from-mint-200 to-white">
        <p className="text-xl text-gray-800 mb-6 max-w-3xl mx-auto leading-relaxed">
          At Noshly, explore, discover, and create a world of delicious dishes and recipes. Whether you're sharing your own food content, viewing recipes, ordering meals, or even using our <span className="text-red-500">AI-powered recipe maker</span> to craft meals from the ingredients you have, Noshly has something for every food lover.
        </p>
        <div className="mt-6">
          <a
            href="/register"
            className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-lg hover:bg-red-600 transition duration-300"
          >
            Join Us Today!
          </a>
        </div>
      </section>



        </div>  
      </section>

     

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-6">
        <div className="text-center">
          <p>&copy; 2025 Noshly. All Rights Reserved.</p>
        </div>
      </footer>

      {/* CSS for Slideshow Background Animation */}
      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0% 0%, 100% 0%, 200% 0%;
            }
            33% {
              background-position: -100% 0%, 0% 0%, 100% 0%;
            }
            66% {
              background-position: -200% 0%, -100% 0%, 0% 0%;
            }
            100% {
              background-position: 0% 0%, 100% 0%, 200% 0%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
