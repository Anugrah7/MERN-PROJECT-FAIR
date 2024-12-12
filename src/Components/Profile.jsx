import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import uploadImg from '../assets/upload.png'
import SERVER_BASE_URL from '../Services/serverUrl';
import { updateUserAPI } from '../Services/allAPI';

const Profile = () => {

    const [open, setOpen] = useState(false);
    const [preview,setPreview] = useState("")
    const [existingProfilePic,setExistingProfilePic] = useState("")
    const [userDetails,setUserDetails] = useState({
      username:"",email:"",password:"",github:"",linkedin:"",profilePic:""
    })
    console.log(userDetails);
    // get existing user datails from session and store it to useDetails state
    useEffect(()=>{
      if (sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({
          ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin
        })
        setExistingProfilePic(user.profilePic)
      }
    },[open])

    // generate url for  uploaded image
    useEffect(()=>{
      if (userDetails.profilePic) {
        setPreview(URL.createObjectURL(userDetails.profilePic))
      } else {
        setPreview("")
      }
    },[userDetails.profilePic])

    const handleUserUpdate = async ()=>{
      //1.get all user details
      const {username,email,password,github,linkedin,profilePic} = userDetails
      console.log(github,linkedin);
      
      //if text filled have value 
      if(github && linkedin){
        //req body
        const reqBody = new FormData()
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        reqBody.append("github",github)
        reqBody.append("linkedin",linkedin)

        preview? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingProfilePic)

        //reqheader

        const token = sessionStorage.getItem("token")
        console.log(token);
        
          if(token){
            const reqHeader = {
              "Content-Type" : "multipart/form-data",
              "Authorization":`Bearer ${token}` 
            }
            //make api call
            try{
              const result = await updateUserAPI(reqBody,reqHeader)
              console.log(result);
              
              if(result.status == 200){
                alert('user Profile Updated Successfully')
                //store update user inn session 
                sessionStorage.setItem("user",JSON.stringify(result.data))
                //
                setOpen(!open)
              }
            }catch(err){
              console.log(err);
              
            }
          }
      }
    }

  return (
    <>
    <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={()=>setOpen(!open)} className="btn text-warning"><i className="fa-solid fa-chevron-down"></i></button>
    </div>
    
    <Fade in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-fade-text">
            {/* upload pic */}
            <label className="text-center">
                <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{display:'none'}} />
                {
                  existingProfilePic=="" ?
                  <img src={preview?preview:uploadImg} height={'200px'} alt="" className="rounded-circle" />
                  :
                  <img src={preview?preview:`${SERVER_BASE_URL}/upload/${existingProfilePic}`} height={'200px'} alt="" className="rounded-circle" />
                }
            </label>
          <div className="mb-2 w-100">
            <input type="text" value={userDetails?.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} placeholder='User GITHUB Link' className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input type="text" value={userDetails?.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} placeholder='User LINKEDIN Link' className="form-control" />
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUserUpdate} className="btn btn-warning">Update</button>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Profile