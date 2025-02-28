import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const FoodContextProvider = createContext()

const FoodContext = ({ children }) => {

  
  
  const [searchItem, setSearchItem] = useState("")
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [error, setError] = useState(null)
  const [recipeIngredients, setRecipeIngredients] = useState({})
  const [favourites, setFavourites] = useState(() => {
    const faves = JSON.parse(localStorage.getItem('favourite-recipe')) ;
    return (faves || []);
  })
  const navigate = useNavigate()
  console.log(favourites)

  useEffect(() => {
    localStorage.setItem('favourite-recipe', JSON.stringify(favourites))
  }, [favourites])
  
    const fetchRecipe = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchItem}`)
            const recipeData = await response.json()
            // console.log(recipeData)

            if(!response.ok){
              throw new Error("Can't find your request")
            }
            
            if(recipeData.recipes){
                setRecipeList(recipeData.recipes)
                setLoading(false)
                setSearchItem('')
                setError(null)
                navigate("/")
            }
            
        } catch (error) {
            // console.log(error.message)
            setError(error.message)
            setLoading(false)
            setSearchItem('')
            setRecipeList([])
        }
    }

    function handleAddFavourites(getCurrentItem){
      let fav = [...favourites]
      const index = fav.findIndex(item => item.recipe_id === getCurrentItem.recipe_id )
      if(index === -1){
        fav.push(getCurrentItem)
      }
      else{
        fav.splice(index)
      }

      setFavourites(fav)
    }

  return (
    <>
      <FoodContextProvider.Provider value={{  searchItem, 
                                              setSearchItem, 
                                              fetchRecipe, 
                                              loading, 
                                              recipeList, 
                                              error,
                                              recipeIngredients,
                                              setRecipeIngredients,
                                              handleAddFavourites,
                                              favourites,
                                              setFavourites
                                              
                                               }}>
        {children}
      </FoodContextProvider.Provider>
    </>
  )
}

export default FoodContext