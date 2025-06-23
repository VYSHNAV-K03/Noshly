import React, { useState } from 'react';
import cc from '../assets/cc.jpg'
import tp from '../assets/tp.jpg'
import tf from '../assets/cf.webp'

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Spicy Delights',
      image: tf, // Replace with your local image path
      rating: 4.5,
      menu: [
        { name: 'Paneer Butter Masala', price: '$12.99' },
        { name: 'Tandoori Chicken', price: '$15.99' },
        { name: 'Butter Naan', price: '$3.99' },
      ],
      location: '123 Curry Lane, Mumbai, India',
    },
    {
      id: 2,
      name: 'Tandoori Palace',
      image: tp, // Replace with your local image path
      rating: 4.7,
      menu: [
        { name: 'Chicken Biryani', price: '$14.99' },
        { name: 'Shahi Paneer', price: '$13.49' },
        { name: 'Garlic Naan', price: '$4.49' },
      ],
      location: '456 Tandoor Road, Delhi, India',
    },
    {
      id: 3,
      name: 'Chaat Corner',
      image: cc, // Replace with your local image path
      rating: 4.3,
      menu: [
        { name: 'Pani Puri', price: '$5.99' },
        { name: 'Bhel Puri', price: '$4.49' },
        { name: 'Dahi Puri', price: '$6.99' },
      ],
      location: '789 Street Food Ave, Pune, India',
    },
  ]);

  const handleViewLocation = (location) => {
    alert(`Restaurant is located at: ${location}`);
  };

  const handleViewMenu = (menu) => {
    alert('Menu:\n' + menu.map(item => `${item.name} - ${item.price}`).join('\n'));
  };

  const handleRateRestaurant = (name) => {
    alert(`You rated ${name}`);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', color: '#dc2626' }}>Explore Restaurants</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Restaurant Image with Rating */}
            <div style={{ position: 'relative' }}>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '8px',
                }}
              >
                <strong>{restaurant.rating}⭐</strong>
              </div>
            </div>

            {/* Restaurant Name */}
            <h2 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#dc2626' }}>{restaurant.name}</h2>

            {/* Restaurant Menu */}
            <div style={{ padding: '0 1rem' }}>
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                {restaurant.menu.map((item, index) => (
                  <li key={index} style={{ marginBottom: '1rem' }}>
                    <strong>{item.name}</strong> - <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={() => handleRateRestaurant(restaurant.name)}
                style={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Rate
              </button>
              <button
                onClick={() => handleViewLocation(restaurant.location)}
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                View Location
              </button>
              <button
                onClick={() => handleViewMenu(restaurant.menu)}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
