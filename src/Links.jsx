import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import Book from './pages/Book'
import Blog from './pages/Blog'
import Product from './components/Product'
import ProjectPage from './components/ProjectPage'
import EssayPage from './components/EssayPage'



const Links = () => {
  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/book' element={<Book/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/archive' element={<Archive />} />
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/project/:id" element={<ProjectPage />}/>
          <Route path="/essays/:id" element={<EssayPage />}/>
         
   
      
    </Routes>
  )
}

export default Links