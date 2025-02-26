import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FoodContextProvider } from './Context/FoodContext'

const RecipeDetailPage = () => {

  const { id } = useParams()
  const { recipeIngredients, setRecipeIngredients, handleAddFavourites, handleRemoveFromFavourites, favourites } = useContext(FoodContextProvider)

  useEffect(() => {
    async function fetchRecipeDetail() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      const data = await response.json()
      // console.log(data)
      setRecipeIngredients(data.recipe)
      // console.log(recipeIngredients)

    }

    fetchRecipeDetail()
  }, [])


  return (
    <div className='detail-container'>
      <div className='detailPage-imageCont'>
        <img src={recipeIngredients.image_url} />
      </div>
      <div className='detailPage-description'>
        <span className='publisher'>{recipeIngredients.publisher}</span>
        <h3>{recipeIngredients.title}</h3>
        <div className='favourite-button' >
          <button onClick={() => handleAddFavourites(recipeIngredients)}>
            {favourites.findIndex(
              item => item.recipe_id === recipeIngredients.recipe_id
            ) !== -1 ?
              "Remove from Favourites" :
              "Save as Favourites"
            }
          </button>
        </div>
        <span>Ingredients:</span>
        <ul>
          {recipeIngredients.ingredients ?
            recipeIngredients.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>) :
            <></>
          }
        </ul>

      </div>
    </div>

  )
}

export default RecipeDetailPage