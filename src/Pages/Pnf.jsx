import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from '../assets/output-onlinegiftools.gif'

const Pnf = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'80px'}}>404</h1>
      <img src={errorImg} alt="" />
      <h1>Look Like You're Lost</h1>
      <p>The page your looking for is not available!</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>
    </div>
  )
}

export default Pnf
