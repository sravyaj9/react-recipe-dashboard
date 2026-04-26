import React, { useState } from 'react';
import './Home.css';
import RecipeCard from '../components/RecipeCard';
import recipesData from '../data/recipes.json';

const Home = ({ activeCategory, searchQuery }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesCategory = activeCategory === 'HOME' || recipe.category.toUpperCase() === activeCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-container">
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onOpen={() => setSelectedRecipe(recipe)} 
          />
        ))}
      </div>

      {/* --- CULINARY & TECHNICAL ACKNOWLEDGMENTS --- */}
      <div className="acknowledgments-section">
        <div className="feedback-card">
          <h3>👩‍🍳 Culinary Gratitude</h3>
          <p>A heartfelt thank you to <strong>Swathi Mam</strong> for the incredible recipes. My family and I thoroughly enjoyed them, and every single dish turned out absolutely delicious!</p>
        </div>
        
        <div className="feedback-card tech-card">
          <h3>💻 Technical Gratitude</h3>
          <p>Special thanks to <strong>Venkat Garu</strong> for the excellent React.js and MERN stack class. The classes were highly organized and effective, and I learned a lot in just one month.</p>
          <p>I am also deeply grateful to <strong>Freegurukul</strong> for providing these amazing classes, which gave me the skills and confidence to build this website.</p>
        </div>
      </div>
      {/* ------------------------------------------- */}

      {/* --- PROFESSIONAL FOOTER --- */}
      <footer className="portfolio-footer">
        <p>Designed & Developed with React.js by <strong>Sravya</strong></p>
      </footer>
      {/* --------------------------- */}

      {/* --- MODAL POPUP --- */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>X</button>
            <h2>{selectedRecipe.title}</h2>
            <img src={`/assets/${selectedRecipe.image}`} alt={selectedRecipe.title} className="modal-image" />
            <span className="category-badge">{selectedRecipe.category}</span>
            <p className="modal-description">{selectedRecipe.description}</p>
            
            <div className="full-recipe-details">
              {selectedRecipe.ingredients && (
                <div className="recipe-section">
                  <h3>Ingredients</h3>
                  <ul className="ingredient-list">
                    {selectedRecipe.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRecipe.instructions && (
                <div className="recipe-section">
                  <h3>Instructions</h3>
                  <ol className="instruction-list">
                    {selectedRecipe.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <div className="modal-notes-box">
              <p><em>Recipes sourced from Swathi Mam Freegurukul Soups and Snacks class.</em></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;