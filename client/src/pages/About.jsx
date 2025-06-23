import React from 'react';

const about = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#dc2626', fontSize: '2.5rem' }}>About Us</h1>

      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#f59e0b' }}>Welcome to Noshly!</h2>
        <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Noshly is a vibrant platform designed to bring food enthusiasts together. Whether you're a seasoned chef, a home cook, or just someone looking to discover new culinary delights, Noshly is here to inspire and make food exploration easier and more fun. 
        </p>
        <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '800px', margin: '1.5rem auto', lineHeight: '1.6' }}>
          Our platform allows users to discover the best recipes, share their culinary experiences through vlogs, and explore popular restaurants. With a focus on Indian cuisine, Noshly helps you explore the rich flavors, textures, and traditions of one of the most diverse food cultures in the world.
        </p>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#f59e0b' }}>Our Mission</h2>
        <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          At Noshly, our mission is to build a community that brings together food lovers from all walks of life. We want to empower people to try new recipes, discover hidden gems in the food world, and share their stories with a like-minded community.
        </p>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#f59e0b' }}>Our Values</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#dc2626' }}>Inspiration</h3>
            <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '250px', margin: '0 auto' }}>
              We believe food is an endless source of inspiration, and we aim to fuel creativity through cooking and sharing recipes.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#dc2626' }}>Community</h3>
            <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '250px', margin: '0 auto' }}>
              We strive to build a supportive and passionate community that shares knowledge, experiences, and recipes.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#dc2626' }}>Authenticity</h3>
            <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '250px', margin: '0 auto' }}>
              We cherish the authentic flavors of Indian cuisine and strive to honor tradition while embracing innovation in the kitchen.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#f59e0b' }}>Get in Touch</h2>
        <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          We would love to hear from you! Whether you have a recipe to share, feedback to provide, or just want to connect, feel free to reach out to us through our <a href="/contact" style={{ color: '#dc2626', textDecoration: 'none' }}>Contact Page</a>.
        </p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '5rem', color: '#555' }}>
        <p style={{ fontSize: '1rem' }}>© 2025 Noshly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default about;
