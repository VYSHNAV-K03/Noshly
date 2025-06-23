import React, { useState, useEffect } from "react";

const Manager = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API
    setActiveOrders([
      { id: 1, customer: "John Doe", items: "2x Pizza, 1x Coke", total: "$25.50", status: "In Progress" },
      { id: 2, customer: "Jane Smith", items: "1x Burger, 1x Fries", total: "$15.00", status: "Preparing" },
    ]);
    setPendingOrders([
      { id: 3, customer: "Michael Lee", items: "3x Pasta", total: "$30.00", status: "Pending Confirmation" },
    ]);
    setOrderHistory([
      { id: 4, customer: "Anna Taylor", items: "1x Salad", total: "$10.00", status: "Delivered" },
      { id: 5, customer: "Chris Evans", items: "2x Tacos", total: "$18.00", status: "Delivered" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Restaurant Manager Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Orders */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Active Orders</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">Order ID</th>
                <th className="border-b py-2">Customer</th>
                <th className="border-b py-2">Items</th>
                <th className="border-b py-2">Total</th>
                <th className="border-b py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {activeOrders.length > 0 ? (
                activeOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customer}</td>
                    <td className="py-2">{order.items}</td>
                    <td className="py-2">{order.total}</td>
                    <td className="py-2 text-blue-500 font-medium">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No active orders.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Pending Orders */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Pending Orders</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">Order ID</th>
                <th className="border-b py-2">Customer</th>
                <th className="border-b py-2">Items</th>
                <th className="border-b py-2">Total</th>
                <th className="border-b py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.length > 0 ? (
                pendingOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customer}</td>
                    <td className="py-2">{order.items}</td>
                    <td className="py-2">{order.total}</td>
                    <td className="py-2 text-orange-500 font-medium">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No pending orders.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Order History */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Order History</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">Order ID</th>
                <th className="border-b py-2">Customer</th>
                <th className="border-b py-2">Items</th>
                <th className="border-b py-2">Total</th>
                <th className="border-b py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.length > 0 ? (
                orderHistory.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.customer}</td>
                    <td className="py-2">{order.items}</td>
                    <td className="py-2">{order.total}</td>
                    <td className="py-2 text-green-500 font-medium">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No order history.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Manager;
