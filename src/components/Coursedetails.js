import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {
    const name_course=useParams()
  return (
    <>
    <h2>{name_course.course}</h2>
    </>
  )
}

export default Coursedetails