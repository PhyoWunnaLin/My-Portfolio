import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Resume from '../pages/Resume/Resume'
import ScrollTop from '../components/ScrollTop/ScrollTop'

const Path = () => {
  return (
    <>
    <ScrollTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default Path
