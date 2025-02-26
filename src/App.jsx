
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Favourites from './Components/Favourites'
import RecipeDetailPage from './Components/RecipeDetailPage'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/favourites" element={<Favourites/>} ></Route>
        <Route path="/recipe-item/:id" element={<RecipeDetailPage/>} ></Route>
      </Routes>
    </>
  )
}

export default App
