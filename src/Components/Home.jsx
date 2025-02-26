import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FoodContextProvider } from './Context/FoodContext'
import RecipeList from './RecipeList'

const Home = () => {

    const { recipeList, loading, error } = useContext(FoodContextProvider)
    if(loading) return <div>Loading...</div>

  return (
    <div className='container'>
          { error && <div>{ error }</div>}
          { recipeList && recipeList.length > 0 ?
          recipeList.map(recipe => 
            <RecipeList  key={recipe.recipe_id} recipe={recipe} />
          )
          :
          <p className='message'>Nothing to show. Please search something</p>
          }
    </div>
  )
}

export default Home
