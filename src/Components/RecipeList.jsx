import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({ recipe }) => {


  return (
    <div className='recipe-card'>
      <div className='image-container'>
        <img src={recipe.image_url} />
      </div>
      <div className='description'>
        <span className='publisher'>{ recipe.publisher}</span>
        <h3>{ recipe.title }</h3>
        <Link to={`/recipe-item/${recipe.recipe_id}`}
              >Recipe Details</Link>

      </div>
    </div>
  )
}

export default RecipeList
