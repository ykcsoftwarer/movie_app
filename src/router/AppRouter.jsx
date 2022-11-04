import React from 'react'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MovieDetails from '../pages/MovieDetails'
import Navbar from '../pages/Navbar'

const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path '/' element = {<Main/>}/>
    <Route path '/login' element = {<Login/>}/>
    <Route path '/register' element = {<Register/>}/>
    <Route path '/Movie/:id' element = {<MovieDetails/>}/>
    


   </Routes>




   </BrowserRouter>
  )
}

export default AppRouter