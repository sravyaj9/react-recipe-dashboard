import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveCategory, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="brand-name">
        Freegurukul: Soups & Snacks
      </div>
      
      <ul className="nav-links">
        <li onClick={() => setActiveCategory('HOME')}>HOME</li>
        <li onClick={() => setActiveCategory('SOUPS')}>SOUPS</li>
        <li onClick={() => setActiveCategory('SNACKS')}>SNACKS</li>
        <li onClick={() => setActiveCategory('SWEETS')}>SWEETS</li>
      </ul>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search recipes..." 
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <a 
          href="/assets/Soups and Snacks Notes.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="pdf-btn"
        >
          View Class Notes
        </a>
      </div>
    </nav>
  );
};

export default Navbar;