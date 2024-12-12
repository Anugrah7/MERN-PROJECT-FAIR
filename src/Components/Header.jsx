import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  const {authorizedUser,setAuthorizedUser} =  useContext(tokenContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorizedUser(false)
    navigate('/')
  }
  return (
    
    <Navbar style={{zIndex:1}} className="bg-body-primary  border rounded shadow w-100 position-fixed">
    <Container>
      <Navbar.Brand>
      <Link to={'/'}  className='text-decoration-none fw-bolder'>
        <i className='' class="fa-brands fa-docker"></i>
          Project Fair
      </Link>
      </Navbar.Brand>
      {
        insideDashboard &&
        <button onClick={logout} style={{fontSize:'20px'}} className='btn btn-link fw-bolder text-dark'><i className="fa-solid fa-right-from-bracket me-2 text-dark"></i>Logout</button>
      }
    </Container>
  </Navbar>
    
  )
}

export default Header
