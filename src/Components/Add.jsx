import React, { useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import upload from '../assets/upload.png'
import { addProjectAPI } from '../Services/allAPI'


const Add = () => {

  const [preview,setPreview] = useState("")
  const [uploadFileStatus,setUploadFileStatus] = useState(false)

  const [projectDetails,setProjectDetails] = useState({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
  console.log(projectDetails);
  

  const [show, setShow] = useState(false);

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

  const handleClose = () => {
    setShow(false);
    setPreview("")
    setUploadFileStatus(false)
    setProjectDetails({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
  }
  const handleShow = () => setShow(true);

  const handleAddProject = async ()=>{
    const {title,languages,overview,github,website,projectImage} = projectDetails
    if(title && languages && overview && github && website && projectImage){
      // api call 
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization":`Bearer ${token}` 
        }
        //make api call
        try{
          const result = await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status == 200){
            alert(`${result?.data?.title}Project uploaded successfully`)
            handleClose()
          }
          else{
            if(result.response.status == 406){
              alert(result.response.data)
            }

          }
        }catch(err){
          console.log(err);
          
        }
      }
    }else {
      alert("Please Fill the form Completely ")
    }
  }

  return (
    <>
      <button onClick={handleShow} className='btn btn-warning text-dark fw-bolder'>+ New Project</button>
      <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} style={{display:'none'}} type="file" />
                <img className='img-fluid' height={'400px'} src={preview?preview:upload} alt="" />
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
          <Button onClick={handleAddProject} variant="success text-dark">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
