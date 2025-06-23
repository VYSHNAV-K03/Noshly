import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required.');
      setMessage('');
      return;
    }

    setError('');
    setMessage('Thank you for contacting us! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 className="text-center mb-4" style={{ color: '#dc2626' }}>Contact Us</h1>
      <p className="text-center mb-5" style={{ color: '#555' }}>
        We'd love to hear from you! Whether you have a question about recipes, feedback, or business inquiries, feel free to reach out.
      </p>
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-4">
          <h3 style={{ color: '#f59e0b' }}>Get in Touch</h3>
          <p><strong>Address:</strong> 123 Foodie Lane, Culinary City, FL 12345</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> support@noshly.com</p>
        </div>

        {/* Contact Form */}
        <div className="col-md-8">
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#f59e0b', borderColor: '#f59e0b' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
