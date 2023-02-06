import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'app/pages/Home'
import Issues from 'app/pages/Issues'

const Router = () => {
  return (
    <div className='w-full h-full'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/issues' element={<Issues/>}/>
        <Route path='/issues/new' element={<></>}/>
        <Route path='/issues/:id' element={<></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router