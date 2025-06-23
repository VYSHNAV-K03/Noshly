import React, { useState } from 'react';
import mar from '../assets/mar.mp4';
const Vlog = () => {
  const [myVlogs, setMyVlogs] = useState([
    { id: 1, user: 'You', title: 'Best Paneer Butter Masala Recipe', contentType: 'video', video: mar }, // Updated with the local video path
    { id: 2, user: 'You', title: 'Street Food Tour: Mumbai', contentType: 'image', image: 'https://via.placeholder.com/800x400', description: 'Exploring Mumbai\'s famous street food.' },
    { id: 3, user: 'You', title: 'Top 5 Indian Desserts', contentType: 'text', description: 'A list of the top 5 desserts you must try in India.' },
  ]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#333' }}>
      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#dc2626' }}>My Uploaded Vlogs</h1>
        
        {/* Upload Button */}
        <a
          href="/upload"
          style={{
            display: 'inline-block',
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '1.5rem',
          }}
        >
          Upload New Vlog
        </a>

        {/* Vlogs Section */}
        <section>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {myVlogs.map((vlog) => (
              <div key={vlog.id} style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                {vlog.contentType === 'video' && (
                  <video controls style={{ width: '100%' }}>
                    <source src={vlog.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {vlog.contentType === 'image' && (
                  <img src={vlog.image} alt={vlog.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                )}
                {vlog.contentType === 'text' && (
                  <div style={{ padding: '1rem' }}>
                    <p style={{ fontSize: '1rem', color: '#555' }}>{vlog.description}</p>
                  </div>
                )}
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#dc2626', marginBottom: '0.5rem' }}>{vlog.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Vlog;
