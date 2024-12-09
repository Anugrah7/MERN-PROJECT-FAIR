import React, { createContext, useState } from 'react'
export const addProjectContext = createContext()  // creating context 

const ContextShare = ({children}) => {
    const [addProjectResponse,setAddProjectResponse] = useState("")
    
  return (
    <addProjectContext.Provider value={{addProjectContext,setAddProjectResponse}}>
      {children}
    </addProjectContext.Provider>
  )
}

export default ContextShare
