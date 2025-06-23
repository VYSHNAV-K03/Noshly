import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../axiosInstance';
import config from '../config';

const ManageProductsSupplier = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for modal data
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [stockUpdates, setStockUpdates] = useState({}); // State for individual stock updates

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosInstance.get('/suppliers/products',config);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    await axios.delete(`/suppliers/products/${productId}`,config);
    // Refresh product list
    const response = await axios.get('/suppliers/products',config);
    setProducts(response.data);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

 

 

  return (
    <div className="manage-products container mt-5 p-4">
      
      <button
        className="btn btn-secondary mb-3 ml-3"
        onClick={() => navigate('/restaurant/add-product')}
      >
        Add Food
      </button>
      <button
        className="btn btn-secondary mb-3 ml-3"
        onClick={() => navigate('/restaurant/bookings')}
      >
        Bookings
      </button>
      <h2>Manage Foods</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Verified Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}₹</td>
              
              <td>
                {product.isVerified ? (
                  <span className="badge bg-success">Verified</span>
                ) : (
                  <span className="badge bg-danger">Not Verified</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-info me-2"
                  onClick={() => handleShowDetails(product)}
                >
                  View Details
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {selectedProduct.name}</p>
            <p><strong>Recipe:</strong> {selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.price}</p>
            <p><strong>Verified:</strong> {selectedProduct.isVerified ? 'Yes' : 'No'}</p>
            {selectedProduct.image && selectedProduct.image.length > 0 && (
              <div>
                <strong>Images:</strong>
                <div>
                  {selectedProduct.image.map((img, index) => (
                    <img
                      key={index}
                      src={`http://localhost:5000/${img}`}
                      alt={`${selectedProduct.name}-${index}`}
                      style={{ width: '100%', marginBottom: '10px' }}
                    />
                  ))}
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ManageProductsSupplier;
