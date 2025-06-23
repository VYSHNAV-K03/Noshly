import React from "react";

const RestaurantManager = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Noshly</h1>
          <nav className="space-x-4">
            <a href="#orders" className="hover:underline">Orders</a>
            <a href="#menus" className="hover:underline">Menus</a>
            <a href="#insights" className="hover:underline">Insights</a>
            <a href="#settings" className="hover:underline">Settings</a>
            <button className="bg-white text-red-500 px-4 py-2 rounded">Log Out</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Overview Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-600">Total Orders</h3>
              <p className="text-2xl font-bold">152</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-600">Revenue</h3>
              <p className="text-2xl font-bold">₹ 25,300</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-600">Average Rating</h3>
              <p className="text-2xl font-bold">4.5/5</p>
            </div>
          </div>
        </section>

        {/* Orders Section */}
        <section id="orders" className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <div className="bg-white p-4 rounded shadow">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">Order ID</th>
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">001</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2 text-green-500">Completed</td>
                  <td className="p-2">₹ 1,200</td>
                </tr>
                <tr>
                  <td className="p-2">002</td>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2 text-orange-500">In Progress</td>
                  <td className="p-2">₹ 850</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* View Order History Button */}
          <div className="mt-4">
            <a
              href="/manager"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors"
            >
              View Order History
            </a>
          </div>
        </section>

        {/* Menu Management Section */}
        <section id="menus" className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Menus</h2>
          <div className="bg-white p-4 rounded shadow">
            <button className="bg-orange-500 text-white px-4 py-2 rounded mb-4">
              Add New Item
            </button>
            <ul>
              <li className="flex justify-between items-center mb-2">
                <span>Butter Chicken</span>
                <span>₹ 350</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <span>Paneer Tikka</span>
                <span>₹ 280</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Insights</h2>
          <div className="bg-white p-4 rounded shadow">
            <p>Coming soon: Advanced sales and customer insights.</p>
          </div>
        </section>

        {/* Settings Section */}
        <section id="settings" className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="bg-white p-4 rounded shadow">
            <form>
              <div className="mb-4">
                <label className="block mb-2">Restaurant Name</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  placeholder="Enter restaurant name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Contact Number</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  placeholder="Enter contact number"
                />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantManager;
