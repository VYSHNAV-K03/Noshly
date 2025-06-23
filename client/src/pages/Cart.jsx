import React from "react";
import recipe1 from '../assets/recipe1.jpg';
import recipe3 from '../assets/recipe3.jpg';
import recipe2 from '../assets/recipe2.jpg';


function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 12.99,
      quantity: 1,
      image: recipe1,
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      price: 10.49,
      quantity: 2,
      image: recipe2,
    },
    {
      id: 3,
      name: "Garlic Naan",
      price: 3.99,
      quantity: 4,
      image: recipe3,
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 min-h-screen text-gray-900">
      <header className="text-center py-8 bg-gradient-to-b from-mint-200 to-white">
        <h1 className="text-4xl font-extrabold text-teal-700">Your Cart</h1>
        <p className="text-xl text-gray-700 mt-2">Review your items before checkout</p>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-2xl font-semibold text-gray-600">
            Your cart is empty!
          </p>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-bold text-teal-700">{item.name}</h2>
                  <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Order Summary</h3>
              <div className="flex justify-between text-gray-700 text-lg">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
              <a
  href="/payment" // Replace "/cart" with the desired destination URL
  className="bg-teal-400 hover:bg-teal-500 text-black px-4 py-2 mt-4 rounded-full inline-block text-center"
>
  proceed to checkout
</a>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-teal-900 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; 2025 Noshly. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
