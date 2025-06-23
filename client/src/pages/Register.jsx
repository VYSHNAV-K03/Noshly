import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { resolvePath, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    role: 'user',
  });

  const [logo, setLogo] = useState(null); // New state for logo upload
  const [validationErrors, setValidationErrors] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'username':
        if (!value.trim()) {
          error = 'Username is required.';
        } else if (value.length < 3) {
          error = 'Username must be at least 3 characters long.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email address.';
        }
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required.';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters long.';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Phone number must be 10 digits long.';
        }
        break;
      case 'location':
        if (!value.trim()) {
          error = 'Location is required.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const fieldError = validateField(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newValidationErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newValidationErrors[key] = error;
      }
    });

    setValidationErrors(newValidationErrors);
    if (Object.keys(newValidationErrors).length > 0) {
      setError('Please fix the errors above.');
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('bio', formData.location);
      formDataToSend.append('role', formData.role);
      if (logo) {
        formDataToSend.append('logo', logo);
      }

      try {
        const userResponse = await axiosInstance.post("/auth/register", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("User registered:", userResponse.data);
      } catch (userError) {
        console.error("User registration failed:", userError.response?.data?.message || userError.message);
      }
  
      // 🌟 Register Restaurant (Always Attempt)
      try {
        const restaurantResponse = await axios.post("/api/restaurants/register", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Restaurant registered:", restaurantResponse.data);
        setMessage("User and restaurant registered successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } catch (restaurantError) {
        console.error("Restaurant registration failed:", restaurantError.response?.data?.message || restaurantError.message);
        setMessage("User registered, but restaurant registration failed.");
      }
  
    } catch (err) {
      console.error("Unexpected error:", err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Register</h2>
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${validationErrors.username ? 'is-invalid' : ''}`}
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {validationErrors.username && <div className="invalid-feedback">{validationErrors.username}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {validationErrors.password && <div className="invalid-feedback">{validationErrors.password}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {validationErrors.phone && <div className="invalid-feedback">{validationErrors.phone}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className={`form-control ${validationErrors.location ? 'is-invalid' : ''}`}
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              {validationErrors.location && <div className="invalid-feedback">{validationErrors.location}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Logo</label>
              <input
                type="file"
                className="form-control"
                name="logo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          <button type="button" onClick={() => navigate('/register-restaurant')} className="btn btn-primary w-100 my-2">
              Register as Restaurant
            </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
