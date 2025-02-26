import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FoodContextProvider } from './Context/FoodContext'
import searchIcon from '../assets/search-icon.svg'

const Header = () => {

  const {searchItem, setSearchItem, fetchRecipe, setLoading} = useContext(FoodContextProvider)

  return (
    <nav className='navigation'>
        <div className='logo'><Link to="/" >FoodRecipe</Link></div>
        <form onSubmit={fetchRecipe} className='form'>
          <img src={searchIcon} onClick={fetchRecipe} alt="seacr-icon"  />
          <input
          type='text'
          name='search'
          value={searchItem}
          onChange={(e)=> setSearchItem(e.target.value) }
          className='search-input'
          placeholder='Search...'
          />
        </form>
        <ul>
            <li>
              <Link to="/favourites" >Favourites</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header