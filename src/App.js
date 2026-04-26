import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'; 

function App() {
  const [activeCategory, setActiveCategory] = useState('HOME');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Navbar 
        setActiveCategory={setActiveCategory} 
        setSearchQuery={setSearchQuery} 
      />
      <Home 
        activeCategory={activeCategory} 
        searchQuery={searchQuery} 
      />
    </div>
  );
}

export default App;