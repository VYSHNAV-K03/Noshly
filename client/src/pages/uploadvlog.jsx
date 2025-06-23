import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadVlog = ({ onUpload }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('video')) {
      setVideo(file);
      setError('');
    } else {
      setError('Please select a valid video file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!video || !title) {
      setError('Please fill in all fields.');
      return;
    }

    // Create a video object to be added to the Vlog list
    const newVlog = {
      id: Date.now(),
      user: 'You',
      title,
      contentType: 'video',
      video: URL.createObjectURL(video),
      description,
    };

    onUpload(newVlog);
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2rem', color: '#dc2626', marginBottom: '1.5rem' }}>Upload New Vlog</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="video" style={{ display: 'block', marginBottom: '0.5rem' }}>Upload Video</label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
            style={{ display: 'block' }}
          />
        </div>
        {video && (
          <div style={{ marginBottom: '1rem' }}>
            <p>Preview:</p>
            <video controls style={{ width: '100%' }}>
              <source src={URL.createObjectURL(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          Upload Vlog
        </button>
      </form>
    </div>
  );
};

export default UploadVlog;
