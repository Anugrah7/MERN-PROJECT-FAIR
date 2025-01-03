import { useContext, useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Auth from './Pages/Auth';
import Footer from './Components/Footer';
import Pnf from './Pages/Pnf';
import { tokenContext } from './context/TokenAuth';

function App() {
  const {authorizedUser,setAuthorizedUser} = useContext(tokenContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister = {true}/>} />

     { authorizedUser &&
      <>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
      </>
      }
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
