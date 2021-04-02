import React from 'react';

// destructure label, calories etc
const Recipe = ({label, calories, image, url, ingredients}) => {
  return (
      <div class="ui column grid">
          <div className="column recipe">
            <div className="content">
              <h2>{label}</h2>
              <p>{calories}</p>
              <ul>{ingredients.map((ingredient) => 
                  <li key={ingredient.text}>{ingredient.text}</li>)}
              </ul>
              <a href={url} target="_blank">
                URL
              </a>
            </div>
            <div className="ui fluid card">
              <img src={image} alt={label} />
            </div>
          </div>
        </div>
  );
};

export default Recipe;