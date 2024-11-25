import React from 'react';
import LoginImg from '../assets/login-project-fair.png'
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Auth = ({insideRegister}) => {
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='img-fluid' src={LoginImg} alt="" />
            </div>
            <div className="col-lg-6">
            <h1 className='my-2'><i class="fa-brands fa-docker me-2"></i>PROJECT FAIR</h1>
            <h5>Sign {insideRegister?'Up': 'In'} To Your Account</h5>
            <Form>
              {
                insideRegister &&
                <FloatingLabel controlId="floatingInputUsername"label="Username"className="mb-2 w-75">   
              <Form.Control type="email" placeholder="Username" />
            </FloatingLabel>
              }
            <FloatingLabel controlId="floatingInput"
              label="Email address"
              className="mb-2 w-75"
                >
            <Form.Control type="email" placeholder="E-mail" />
          </FloatingLabel>
          <FloatingLabel className='w-75' controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
              {
                insideRegister ?
                <div className="mt-3">
                  <button className='btn btn-primary mb-2'>Register</button>
                  <p>Existing User ? Please Click Here To <Link className='text-warning' to={'/login'}>Login</Link></p>
                </div>
                :
                <div className="mt-3">
                  <button className='btn btn-primary mb-2'>Login</button>
                  <p>New  User ? Please Click Here To <Link className='text-warning' to={'/register'}>Register</Link></p>
                </div>
              }


            </Form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
