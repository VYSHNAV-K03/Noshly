import React, { useState } from "react";
import { User, Mail, Phone, ShoppingBag, Heart, Settings, Save, List } from "lucide-react";
import { apiUrl } from "../axiosInstance";

function Profile() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user);
  
  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900">
      
      {/* Profile Header */}
      <header className="py-10 bg-gradient-to-b from-teal-600 to-mint-400 text-white text-center">
        <img 
        className="w-32 h-32 rounded-full mx-auto mb-4"
        src={user && apiUrl+ user.logo} alt="" />        
        <h1 className="text-5xl font-bold">Your Profile</h1>
        <p className="text-xl mt-2">Manage your account, orders, and preferences</p>
      </header>

      {/* Profile Content */}
      <main className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          {/* User Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <User size={28} /> Personal Information
            </h2>
            <div className="bg-gradient-to-r from-mint-300 via-teal-300 to-mint-400 p-6 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <User size={18} /> Name
                    {
                      user && (
                        <span className="text-gray-600 text-sm ml-2">
                          {user.name}
                        </span>
                      )
                    }
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Mail size={18} /> Email
                    {
                      user && (
                        <span className="text-gray-600 text-sm ml-2">
                          {user.email}
                        </span>
                      )
                    }
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Phone size={18} /> Phone Number
                    {
                      user && (
                        <span className="text-gray-600 text-sm ml-2">
                          7012452024
                        </span>
                      )
                    }
                  </label>
                </div>
               
              </form>
            </div>
          </section>

          {/* Order History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <ShoppingBag size={28} /> Order History
            </h2>
            <div className="bg-gradient-to-r from-teal-300 to-mint-400 p-6 rounded-lg shadow-md">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold">Order #{index + 1}</h3>
                  <p className="text-gray-700">Placed on: {new Date().toLocaleDateString()}</p>
                  <p className="text-gray-700">Total: ₹{(index + 1) * 500}</p>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 mt-4 rounded-full flex items-center gap-2">
                    <List size={18} /> View Details
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-3xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <Heart size={28} /> Preferences
            </h2>
            <div className="bg-gradient-to-r from-mint-300 via-teal-300 to-mint-400 p-6 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Heart size={18} /> Favorite Cuisine
                  </label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Indian, Italian, Chinese, etc." />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <Settings size={18} /> Dietary Preferences
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option value="">Select</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  <Save size={18} /> Save Preferences
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-6 text-center">
        <p>&copy; 2025 Noshly. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
