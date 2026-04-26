import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onOpen }) => {
  return (
    <div className="card">
      <img src={`/assets/${recipe.image}`} alt={recipe.title} className="card-image" />
      <div className="card-content">
        <span className="category-badge">{recipe.category}</span>
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-description">{recipe.description}</p>
        
        <button className="view-btn" onClick={onOpen}>
          VIEW FULL RECIPE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;