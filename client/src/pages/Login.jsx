import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import bgImage from '../assets/bck2.jpg'; // Import background image
import "@fontsource/poppins"; // Import modern font

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axiosInstance.post('/auth/login', { email, password });
      const { token, role } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'restaurant') {
        navigate('/restaurant/dashboard');
      } else {
        navigate('/dashboard');
      }

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid credentials or user not verified.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg"
        style={{
          backdropFilter: 'blur(10px)', 
          background: 'rgba(255, 255, 255, 0.15)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
          fontFamily: "'Poppins', sans-serif",
          color: '#fff',
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-400 text-center">{error}</p>}
          <button type="submit" className="w-full bg-white text-gray-900 p-3 rounded-lg mt-4 hover:bg-gray-200 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
