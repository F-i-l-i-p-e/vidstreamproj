// client/src/components/StreamingPage.jsx

import React, { useState, useEffect } from 'react';

function StreamingPage() {
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/videos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const videos = await response.json();
          setVideos(videos);
        } else {
          setErrorMessage('Error fetching videos');
        }
      } catch (err) {
        setErrorMessage('Network error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Streaming</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {videos.map((video) => (
        <div key={video.id} className="card mb-4">
          <h3 className="card-header">{video.title}</h3>
          <div className="card-body">
            <video src={video.url} controls className="w-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StreamingPage;
