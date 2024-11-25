import { useState } from "react";
import React from 'react'
import { Collapse,Card } from "react-bootstrap";
import imgUpload from '../assets/image-upload.png';


const Profile = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button className="btn text-warning" onClick={()=>setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
      </div>
        <Collapse in={open}>
        
        <div className="row container-fluid align-items-center justify-content-center shadow p-2 rounded" id="example-collapse-text">
        {/* upload pic */}
        <label className="text-center" >
            <input style={{display:'none'}} type="file" />
            <img width={'400px'} className="rounded-circle" src={imgUpload} alt="" />
        </label>


          <div className="mb-2 w-100">
            <input type="text" placeholder="user GITHUB Link" className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input type="text" placeholder="user LINKEDIN Link" className="form-control" />
          </div>
          <div className="d-grid w-100">
           <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile
