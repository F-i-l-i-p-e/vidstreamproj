// client/src/components/ProfilePage.jsx

import React, { useState, useEffect } from 'react';

function ProfilePage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const { name, photo } = await response.json();
          setName(name || '');
          setPhoto(photo || '');
        } else {
          setErrorMessage('Error fetching profile');
        }
      } catch (err) {
        setErrorMessage('Network error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ name, photo, password }),
    });

    if (response.ok) {
      setErrorMessage('Profile updated');
    } else {
      setErrorMessage('Error updating profile');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Profile</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input type="text" className="form-control" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfilePage;
