import React, { useContext } from 'react'
import { FoodContextProvider } from './Context/FoodContext'
import RecipeList from './RecipeList'

const Favourites = () => {
    
  const { favourites } = useContext(FoodContextProvider)

  return (
  <div className='container'>
        { favourites && favourites.length > 0 ?
        favourites.map(favourite => 
          <RecipeList  key={favourite.recipe_id} recipe={favourite} />
        )
        :
        <p>Favourites empty</p>
        }
  </div>
)
}

export default Favourites