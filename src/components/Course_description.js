import React from 'react'

const Course_description = () => {
    return (
        <>
            <div className='dark:bg-gray-900 dark:text-white border-solid border-slate-200 dark:border-slate-600' style={{borderWidth:"2px", borderRadius: "5px", marginTop: "20px", padding: "10px 15px" }}>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Exam Description</h2>
                <ul className="max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        JEE Main is a standardized test conducted across different states in India.
                    </li>
                    <li>
                        The exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.
                    </li>
                    <li>
                        The exam conducting authority considers the best NTA score in preparing the ranks/merit list.
                    </li>
                </ul>

                <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">Eligibility</h2>
                <ul className="max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        Age Limit - No age limit                    
                    </li>
                    <li>
                        Qualifying Exam - Class I2/Equivalent Exam                    
                    </li>
                    <li>
                        Percentage - At least 75% in class 12/equivalent exam
                   </li>
                    <li>
                    Year of Passing - 2021, 2022 or appearing in 2023
                   </li>
                    <li>
                    Number of attempts - Candidate can appear in JEE Main for 3
consecutive years after passing their class 12/equivalent exam                   </li>
                </ul>

                <h2 className="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">Exam Description</h2>
                <ul className="max-w-md space-y-1 text-black-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        JEE Main is a standardized test conducted across different states in India.
                    </li>
                    <li>
                        The exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.
                    </li>
                    <li>
                        The exam conducting authority considers the best NTA score in preparing the ranks/merit list.
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Course_description