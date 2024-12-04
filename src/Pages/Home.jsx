import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/home-project-fair.png'
import ProjectCard from '../Components/ProjectCard'
import { Button, Card } from 'react-bootstrap'



const Home = () => {

  const [isLogin,setIsLogin] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])


  return (
    <>
    {/* Landing */}
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100 ">
        <div className="container">
          <div className="row align-items-center">
            <div  className="col-lg-6">
              <h1 style={{fontSize:'80px'}} ><i className='fa-brands fa-docker'></i> Project Fair</h1>
              <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!
              STARTS TO EXPLORE</p>
              { 
              isLogin ?
                <Link to={'/dashboard'} className="btn btn-success">MANAGE YOUR PROJECTS</Link>
                :
                <Link to={'/login'} className="btn btn-primary">STARTS TO EXPLORE</Link>
                }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingImage} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Explore Project */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Project</h1>
        <marquee>
          <div className="d-flex">
            <ProjectCard />
          </div>
        </marquee>
        <button className='btn btn-link mt-5'>Click Here to View More Projects</button>
      </div>

      {/* Our Testimonials */}

      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>OUR TESTIMONIALS</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          {/* card */}
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} className='rounded-circle img-fluid' src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
        <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>

    </>
  )
}

export default Home
