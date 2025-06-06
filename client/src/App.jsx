import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import FooterComp from './components/FooterComp'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          
          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          
          <Route path='/Projects' element={<Projects/>} />

      </Routes>

      <FooterComp/>

    </BrowserRouter>
  )
}

export default App