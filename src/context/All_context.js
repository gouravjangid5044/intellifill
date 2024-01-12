import React from 'react'
import Sitecontext from './Sitecontext'
import { useState } from 'react'
const All_context = (props) => {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <Sitecontext.Provider value={{isChecked,setIsChecked}}>
        {props.children}
    </Sitecontext.Provider>
  )
}

export default All_context