import React, { useState } from 'react';

const Upload = () => {
  const [contentType, setContentType] = useState('');
  const [comment, setComment] = useState('');

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setComment(''); // Reset comment when type changes
  };

  const handleUpload = () => {
    alert(`Uploading ${contentType} with comment: "${comment}"`);
    // Add logic to handle upload
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #d4f1f4, #76e4cc)',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#0d9488', textAlign: 'center', marginBottom: '1rem' }}>
          Upload Content
        </h1>

        {/* Content Type Selection */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2c7a7b', marginBottom: '1rem' }}>Select Content Type</h2>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '1rem', justifyContent: 'center' }}>
            {['Video', 'Image', 'Text'].map((type) => (
              <li key={type}>
                <button
                  onClick={() => handleContentTypeChange(type.toLowerCase())}
                  style={{
                    backgroundColor: contentType === type.toLowerCase() ? '#0d9488' : '#f8f9fa',
                    color: contentType === type.toLowerCase() ? 'white' : '#333',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    border: '2px solid #0d9488',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Comment Section (Video or Image Only) */}
        {(contentType === 'video' || contentType === 'image') && (
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#2c7a7b', marginBottom: '1rem' }}>Add a Comment</h2>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment about your upload..."
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
                resize: 'vertical',
                minHeight: '100px',
              }}
            />
          </section>
        )}

        {/* Upload Button */}
        <a
          href="/uploadvlog"
          onClick={handleUpload}
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#0d9488',
            color: 'white',
            padding: '1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Upload {contentType ? contentType.charAt(0).toUpperCase() + contentType.slice(1) : 'Content'}
        </a>
      </div>
    </div>
  );
};

export default Upload;
