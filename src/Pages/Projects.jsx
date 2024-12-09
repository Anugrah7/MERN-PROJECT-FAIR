import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../Services/allAPI'


const Projects = () => {

  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProject] = useState([])
  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  

  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      try{
        const result = await allProjectAPI(reqHeader,searchKey)
        console.log(result);
        if(result.status == 200){
          setAllProject(result.data)
        }

      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <h1>
            ALL PROJECTS
          </h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Project by Language' className='form-control w-25'/>
        </div>
        <Row>
          {
            allProjects.length>0?
            allProjects?.map(project=>(

            <Col key={project?._id} className='mb-3 mx-3' sm={12} md={6} lg={3}>
          <ProjectCard displayData={project} />
          </Col>
          ))
          :
          <div className="textdanger">Project Not Found</div>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects
