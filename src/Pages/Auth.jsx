import React, { useContext, useState } from 'react';
import LoginImg from '../assets/login-project-fair.png'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { tokenContext } from '../context/TokenAuth';



const Auth = ({insideRegister}) => {
  const {authorizedUser,setAuthorizedUser} =  useContext(tokenContext)
  const [isLogin , setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [userInput,setUserInput] = useState({
  username:"",email:"",password:""
})
console.log(userInput);

//register
const register =  async (e)=>{
  e.preventDefault()
  if(userInput.username && userInput.password && userInput.email){
    //api call
    try{
      const result = await registerAPI(userInput)
      if(result.status == 200){
        alert(`Welcome ${result.data?.username},Please login to explore our Projects`);
        navigate('/login')
        setUserInput({username:"",email:"",password:""})
      }else{
        if(result.response.status == 406){
          alert(result.response.data)
          setUserInput({username:"" , email:"",password:""})
        }

      }

    }catch(err){
      console.log(err);
    }

  }else{
    alert("Please fill the form completely !!! ")
  }
}

//login Function
const login = async (e)=>{
  e.preventDefault()
  if(userInput.password && userInput.email){
    //api call
    try{
      const result = await loginAPI(userInput)
      if(result.status == 200){

        sessionStorage.setItem("user",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
        setIsLogin(true)
        setAuthorizedUser(true)
        setTimeout(()=>{
          navigate('/')
        setUserInput({username:"",email:"",password:""})
        setIsLogin(false)
        },2000)
    
      }else
      {
        if(result.response.status == 404){
          alert(result.response.data)
        }
      }

    }catch(err){
      console.log(err);
    }

  }else{
    alert("Please fill the form completely !!! ")
  }
  
}

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
              <Form.Control onChange={e=>setUserInput({...userInput,username:e.target.value})} value={userInput.username} type="email" placeholder="Username" />
            </FloatingLabel>
              }
            <FloatingLabel controlId="floatingInput"
              label="Email address"
              className="mb-2 w-75"
                >
            <Form.Control onChange={e=>setUserInput({...userInput,email:e.target.value})} value={userInput.email} type="email" placeholder="E-mail" />
          </FloatingLabel>
          <FloatingLabel className='w-75' controlId="floatingPassword" label="Password">
            <Form.Control onChange={e=>setUserInput({...userInput,password:e.target.value})} value={userInput.password} type="password" placeholder="Password" />
          </FloatingLabel>
              {
                insideRegister ?
                <div className="mt-3">
                  <button onClick={register} className='btn btn-primary mb-2'>Register</button>
                  <p>Existing User ? Please Click Here To <Link className='text-warning' to={'/login'}>Login</Link></p>
                </div>
                :
                <div className="mt-3">
                  <button onClick={login} className='btn btn-primary mb-2 d-flex fw-bold'>Login
                  {
                    isLogin &&
                    <Spinner animation="border" variant="light" className='ms-1' />}
                  </button>

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
