import React from "react";

function Payment() {
  return (
    <div className="bg-gradient-to-r from-mint-200 via-mint-300 to-mint-400 text-gray-900 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-teal-700 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Payment</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
            Complete Your Payment
          </h2>

          {/* Billing Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Billing Information</h3>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </form>
          </section>

          {/* Payment Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h3>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Card Number"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <input
                type="text"
                placeholder="Name on Card"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
            </form>
          </section>

          {/* Confirm Payment Button */}
          <div className="text-center">
            <a
              href="/confirmation" // Replace with the actual confirmation page URL
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg inline-block"
            >
              Confirm Payment
            </a>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-teal-900 text-white py-6">
        <div className="text-center">
          <p>&copy; 2025 Noshly. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Payment;
