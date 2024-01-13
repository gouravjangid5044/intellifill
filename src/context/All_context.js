import React from 'react'
import Sitecontext from './Sitecontext'
import { useState } from 'react'
const All_context = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
    const exam_data=[
      {
         img:"https://static.toiimg.com/thumb/msid-94213168,width-400,resizemode-4/94213168.jpg",
         exam_name:"JEE Main 2023",
         organization:"National Testing Agency",
         enrolled:"More Than 20 Lakh",
         price:"1200",
         tags:["Engineering","PCM","IIT"]
      },
      {
         img:"https://m.economictimes.com/thumb/msid-98117289,width-1200,height-900,resizemode-4,imgsize-55680/civil-services-exam-candidates-cant-withdraw-applications-says-upsc.jpg",
         exam_name:"Civil Services 2023",
         organization:"Union Public Service Commission",
         enrolled:"More Than 10 Lakh",
         price:"1000",
         tags:["Engineering","PCM"]
      },
      {
         img:"https://imgeng.jagran.com/images/2022/mar/sss1648094967300.jpg",
         exam_name:"SSC CGL 2023",
         organization:"Staff Selection Commission",
         enrolled:"More Than 15 Lakh",
         price:"1500",
         tags:["Engineering","PCM"]
      },
      {
         img:"https://static.toiimg.com/thumb/msid-70508166,width-400,resizemode-4/70508166.jpg",
         exam_name:"IBPS Exam",
         organization:"Institute of Banking Personnel Selection",
         enrolled:"More Than 10 Lakh",
         price:"2100",
         tags:["Engineering","PCM","Commerce"]
      },
  
  
    ]
  return (
    <Sitecontext.Provider value={{isChecked,setIsChecked,handleCheckboxChange,exam_data}}>
        {props.children}
    </Sitecontext.Provider>
  )
}

export default All_context