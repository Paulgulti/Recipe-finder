import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FoodContextProvider } from './Context/FoodContext'
import RecipeList from './RecipeList'
import searchIcon from '../assets/search-icon.svg'

const Home = () => {

  const { recipeList, loading, error, searchItem, setSearchItem, fetchRecipe } = useContext(FoodContextProvider)
  // if (loading) return <div>Loading...</div>

  return (
    <>
      <form onSubmit={fetchRecipe} className='form'>
        <div>
        <img src={searchIcon} onClick={fetchRecipe} alt="seacr-icon" />
        <input
          type='text'
          name='search'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className='search-input'
          placeholder='Search...'
        />

        </div>
      </form>

      {loading ? (
        <>
          <p className='message'>Loading...</p>
        </>
      ) : (

        <>
          <div className='container'>
            {error && <div>{error}</div>}
            {recipeList && recipeList.length > 0 ?
              recipeList.map(recipe =>
                <RecipeList key={recipe.recipe_id} recipe={recipe} />
              )
              :
              <p className='message'>Nothing to show. Please search something</p>
            }
          </div>
        </>
      )
      }
    </>
  )
}

export default Home
