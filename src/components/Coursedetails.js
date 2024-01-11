import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Coursedetails = () => {
    const name_course=useParams()
  return (
    <>
    <Navbar/>
    <h2>{name_course.course}</h2>
    </>
  )
}

export default Coursedetails