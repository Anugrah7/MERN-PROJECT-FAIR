import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import View from '../Components/View';

const Dashboard = () => {
  const [username,setUsername] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }
  },[])
  return (
    <>
      <Header insideDashboard={true}/>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>Welcome <span className='text-warning'>{username}</span>,</h1>
            <View />
          </div>
          <div className="col-lg-4">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
