// src/pages/SupplierPanel/SupplierDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SupplierDashboard = () => {
  return (
    <div className="supplier-dashboard container mt-10 p-4">
      <h2>Restuarant Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/supplier/products" className="btn btn-primary mx-2 my-2">Manage Food</Link>
        <Link to="/supplier/add-product" className="btn btn-primary mx-2 my-2">Add Recipe</Link>
        {/* <Link to="/supplier/bookings" className="btn btn-primary mx-2 my-2">Manage Bookings</Link> */}


      </div>
    </div>
  );
};

export default SupplierDashboard;
