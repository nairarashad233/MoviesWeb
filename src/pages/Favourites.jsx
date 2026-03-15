import React from 'react';
import './Favourites.css';

function Favourites() {
  return (
    <div className="favourites-page">
      <div className="favourites-container">
        <header className="favourites-header">
          <div className="header-left">
            <h1>My Favorites</h1>
            <p>Your curated collection of cinematic masterpieces.</p>
          </div>
        </header>

        <div className="empty-state">
          <h3>Your favorites list is empty</h3>
          <p>Explore our vast collection and add movies you love to see them here.</p>
          <button className="btn-explore" onClick={() => window.location.href = '/'}>
            Explore Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
