import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Sitecontext from '../context/Sitecontext'
import Apply from './Apply'
import Course_description from './Course_description'
import '../course_details.css'
import Side_menu from './Side_menu'

const Coursedetails = () => {
  const name_course = useParams()
  const { isChecked, handleCheckboxChange } = useContext(Sitecontext)
  // console.log(name_course.course)
  return (
    <>
      <div className={isChecked && "dark"}>
        <Navbar theme_fun={handleCheckboxChange} />
        <section className='dark:dark:bg-gray-900 dark:text-white'>
          <div className='apply_parent'>
            <Link to="/" className="text-blue-700 hover:text-blue-800 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:text-blue-600 dark:hover:text-blue-700">
              <svg width="24" fill={isChecked&&"white"} height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 517 232C 517 232 517 232 517 232C 518 232 518 232 518 232C 518 232 718 432 718 432C 728 442 728 458 718 468C 708 478 692 478 682 468C 682 468 525 310 525 310C 525 310 526 750 526 750C 526 764 515 776 501 776C 487 776 475 764 476 750C 476 750 475 310 475 310C 475 310 318 468 318 468C 308 478 292 478 282 468C 272 458 272 442 282 432C 282 432 479 235 479 235C 484 229 492 225 500 225C 506 225 513 227 517 232C 517 232 517 232 517 232" transform="rotate(270,500,500)" /></svg>
              Back
            </Link>
            <div className='apply_child'>
              <div className='apply_child_1'>
                <div className='apply_child_1_1'>
                  <Apply course={name_course.course}/>
                </div>
                <div className='apply_child_1_2'>
                   <Course_description/>
                </div>
              </div>
              <div className='apply_child_2'>
                <Side_menu/>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Coursedetails