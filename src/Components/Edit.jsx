import React, { useState,useEffect, useContext } from 'react'
import { Modal,Button } from 'react-bootstrap'
import upload from '../assets/upload.png'
import SERVER_BASE_URL from '../Services/serverUrl'
import { updateProjectAPI } from '../Services/allAPI'
import { editProjectContext } from '../context/ContextShare'

const Edit = ({project}) => {

  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectContext)
  const [preview,setPreview] = useState("")
  const [uploadFileStatus,setUploadFileStatus] = useState(false)

  const [projectDetails,setProjectDetails] = useState({id:project?._id,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""})
  console.log(projectDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id:project?._id,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
    })
  }
  const handleShow = () =>{
    setShow(true);
    setProjectDetails({
      id:project?._id,title:project?.title,languages:project?.languages,overview:project?.overview,github:project?.github,website:project?.website,projectImage:""
    })
  } 
  useEffect(()=>{
    if(projectDetails.projectImage.type=="image/png" || projectDetails.projectImage.type== "image/jpeg" || projectDetails.projectImage.type== "image/jpg"){
      setUploadFileStatus(true)
     setPreview( URL.createObjectURL(projectDetails.projectImage))
    }else{
      //invalid imG file 
      setUploadFileStatus(false)
      setProjectDetails({...projectDetails,projectImage:""})
    }
  },[projectDetails.projectImage])
  
//steps to update project details 
//1. Create a function for defining update project logic
const handleUpdateProject = async ()=>{
  //2.get all inputs fro state and check all text inputs are empty or not
  const {id,title,languages,overview,github,website,projectImage} = projectDetails
  if(title && languages && overview && github && website){
    //4. if its not empty , then create form data to hold request body , get token create request header , with request body and header make api call
    const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      
      preview?reqBody.append("projectImage",projectImage): reqBody.append("projectImage",project?.projectImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization":`Bearer ${token}` 
        }
        //make api call

        try{
          const result = await updateProjectAPI(id,reqBody,reqHeader)
          if(result.status == 200){
            alert("Project updates successfully")
            handleClose()
            setEditProjectResponse(result)
          }
        }catch(err){
          console.log(err);
          
        }
  }else{
    alert("Please fill the form Completely !!")
  }

}
}
 
//3.if its empty the alert fill the form 
 


  return (
    <>
      <button onClick={handleShow} className='btn  text-dark fw-bolder'><i className='fa-solid fa-edit'></i></button>
      <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} style={{display:'none'}} type="file" />
                <img className='img-fluid' height={'400px'} src={preview?preview:`${SERVER_BASE_URL}/upload/${project?.projectImage}`} alt="" />
              </label>
              { !uploadFileStatus &&
                <div className="text-danger fw-bolder">*Upload Only the Following File types (jpeg ,jpg ,png) here !!</div>
              }
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} />
              </div>
              <div className="mb-2">
                <input value={projectDetails.languages} onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" className='form-control' placeholder='Project Languages' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})} className='form-control' placeholder='Project Overiew' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} className='form-control' placeholder='Project Github Link' />
              </div>
              <div className="mb-2">
                <input value={projectDetails.website} type="text" onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} className='form-control' placeholder='Project Website Link' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger text-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="warning text-dark">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
