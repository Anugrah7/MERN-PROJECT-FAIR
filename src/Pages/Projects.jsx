import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'


const Projects = () => {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <h1>
            ALL PROJECTS
          </h1>
          <input type="text" placeholder='Search Project by Language' className='form-control w-25'/>
        </div>
        <Row>
          <Col className='mb-3 mx-3' sm={12} md={6} lg={3}>
          <ProjectCard />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects
