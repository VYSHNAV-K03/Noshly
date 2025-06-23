import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import config from '../config';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState([]); // Updated to allow multiple images
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    image.forEach((img) => formData.append('image', img)); // Add multiple images

    try {
      await axiosInstance.post('/suppliers/products', formData,config);
      navigate('/restaurant/dashboard');
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="add-product container mt-10 p-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate('/restaurant/dashboard')}
      >
        Back to Dashboard
      </button>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Food Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Recipe</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Images</label>
          <input
            type="file"
            className="form-control"
            id="image"
            multiple
            onChange={handleImageChange}
          />
        </div>
        
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Add Food</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

        
