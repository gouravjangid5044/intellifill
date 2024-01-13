import React from 'react';
import Course_card from './Course_card';
import { useId } from 'react';
import '../exam_layout.css'
const Recommended = ({heading,badges,data}) => {
    const badge_id=useId()
    const course_id=useId()
    return (
        <>
            <div id="recommended_box" className="dark:bg-gray-900" style={{ marginTop: "-1px" }}>
                <div id="recommended">
                    <div style={{ display: "flex"}}>
                        <h2 style={{width:"65%"}} className="mb-4 mt-4 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">{heading}</h2>
                        <button style={{width:"35%",justifyContent:"flex-end" }} type="button" className="text-blue-700 hover:text-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-blue-600 dark:hover:text-blue-700">
                            See all
                            <svg style={{ marginTop: "3px", marginLeft: "5px" }} fill="blue" width="16" height="16" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 165 565C 165 565 465 265 465 265C 484 245 516 245 535 265C 535 265 835 565 835 565C 855 584 856 616 836 636C 816 656 784 655 765 635C 765 635 500 371 500 371C 500 371 235 635 235 635C 221 650 200 655 181 647C 162 639 150 621 150 601C 150 587 155 574 165 565C 165 565 165 565 165 565" transform="rotate(90,500,500)" /></svg>
                        </button>
                    </div>
                    {
                        badges &&
                        <div className='mb-4'>
                            {
                                badges.map(element=>{
                                    return <span id={badge_id} class="inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-500 border-solid cursor-pointer mx-2">{element}</span>
                                })
                            }
                        </div> 
                    }
                    <div id="course_card">
                        {
                            data.map((element,index)=>{
                                return <Course_card id={course_id} details={element} ind={index} />
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default Recommended