import React, { useState } from 'react'


const Navbar = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [visible_menu, set_visible_menu] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    const nav_element = {
        '@media only screen and (min-width: 767px)': {
            display: "none"
        }
    }
    return (
        <>
            <div className={`${isChecked == true ? "dark" : ""}`}>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse flex-col">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FormEase</span>

                            <div class="relative flex items-center" style={{ margin: "0px", height: "8px" }}>
                                <div class="flex justify-center items-center border-gray-400 mb-1">---</div>
                                <span class="flex-shrink text-gray-400" style={{ fontSize: "9px" }}>APPLY WITH EASE</span>
                                <div class="flex justify-center items-center border-gray-400 mb-1">---</div>
                            </div>

                        </a>
                        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                        <div className="hidden w-full lg:block md:w-auto" id="navbar-default" style={nav_element}>
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                            focus:outline-none " placeholder="Search Exams Here" />
                                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>
                        </div>



                        <button data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => set_visible_menu(!visible_menu)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>


                        {/* HERE */}
                        <div className='flex justify-between items-center hidden lg:flex' style={{ width: "5%" }} >

                            {/* <img className="cursor-pointer w-7 h-7 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"></img> */}

                            <div className='cursor-pointer w-7 h-7 rounded-full mb-1'>
                                <svg width="32" height="32" fill={`${isChecked == true ? "gray" : ""}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 525 163C 525 163 525 214 525 214C 567 218 599 232 622 254C 650 281 663 315 671 350C 688 420 690 495 720 535C 724 540 750 556 775 580C 801 605 825 643 825 700C 825 721 815 739 802 752C 789 765 771 775 750 775C 750 775 622 775 622 775C 615 810 594 840 563 858C 524 881 476 881 437 858C 406 840 385 810 378 775C 378 775 250 775 250 775C 229 775 211 765 198 752C 185 739 175 721 175 700C 175 643 199 605 225 580C 250 556 276 540 280 535C 310 495 312 420 329 350C 337 315 350 281 378 254C 401 232 433 218 475 214C 475 214 475 163 475 163C 475 149 486 137 500 137C 514 137 525 148 525 163C 525 163 525 163 525 163M 412 290C 395 307 385 331 377 362C 363 423 365 505 320 565C 302 589 278 598 259 616C 240 635 225 657 225 700C 225 704 228 711 233 717C 239 722 246 725 250 725C 417 725 583 725 750 725C 754 725 761 722 767 717C 772 711 775 704 775 700C 775 657 760 635 741 616C 722 598 698 589 680 565C 635 505 637 423 623 362C 615 331 605 307 588 290C 571 274 546 262 500 263C 500 263 500 263 500 263C 454 263 429 274 412 290C 412 290 412 290 412 290M 462 815C 486 828 514 828 538 815C 553 806 565 792 571 775C 571 775 429 775 429 775C 435 792 447 806 462 815C 462 815 462 815 462 815" /></svg>
                            </div>

                            <img className="cursor-pointer w-7 h-7 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="Rounded avatar"></img>
                        </div>

                        <div>
                            <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center hidden lg:block'>
                                <input
                                    type='checkbox'
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className='sr-only'
                                />
                                <span
                                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                                        }`}
                                >
                                    <img
                                        src={`${!isChecked ? `/moon.png` : `/night-mode.png`}`}
                                        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                                            }`}
                                    />
                                </span>
                            </label>

                        </div>

                    </div>
                </nav>

                <div className={`${visible_menu ? " " : "hidden "}w-full lg:w-auto px-2 mt-1 absolute`}>
                    <ul className="font-medium flex flex-col p-4 lg:p-0 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</a>
                        </li>

                        <li className='flex justify-around align-center'>
                            <div className='w-1/4'>
                                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                                    <input
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className='sr-only'
                                    />
                                    <span
                                        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                                            }`}
                                    >
                                        <img
                                            src={`${!isChecked ? `/moon.png` : `/night-mode.png`}`}
                                            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                                                }`}
                                        />
                                    </span>
                                </label>
                            </div>

                            <div className='w-1/4'>
                                <div className='flex justify-evenly items-center' >

                                    {/* <img className="cursor-pointer w-7 h-7 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"></img> */}

                                    <div className='cursor-pointer w-7 h-7 rounded-full mb-1'>
                                        <svg width="32" height="32" fill={`${isChecked == true ? "gray" : ""}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 525 163C 525 163 525 214 525 214C 567 218 599 232 622 254C 650 281 663 315 671 350C 688 420 690 495 720 535C 724 540 750 556 775 580C 801 605 825 643 825 700C 825 721 815 739 802 752C 789 765 771 775 750 775C 750 775 622 775 622 775C 615 810 594 840 563 858C 524 881 476 881 437 858C 406 840 385 810 378 775C 378 775 250 775 250 775C 229 775 211 765 198 752C 185 739 175 721 175 700C 175 643 199 605 225 580C 250 556 276 540 280 535C 310 495 312 420 329 350C 337 315 350 281 378 254C 401 232 433 218 475 214C 475 214 475 163 475 163C 475 149 486 137 500 137C 514 137 525 148 525 163C 525 163 525 163 525 163M 412 290C 395 307 385 331 377 362C 363 423 365 505 320 565C 302 589 278 598 259 616C 240 635 225 657 225 700C 225 704 228 711 233 717C 239 722 246 725 250 725C 417 725 583 725 750 725C 754 725 761 722 767 717C 772 711 775 704 775 700C 775 657 760 635 741 616C 722 598 698 589 680 565C 635 505 637 423 623 362C 615 331 605 307 588 290C 571 274 546 262 500 263C 500 263 500 263 500 263C 454 263 429 274 412 290C 412 290 412 290 412 290M 462 815C 486 828 514 828 538 815C 553 806 565 792 571 775C 571 775 429 775 429 775C 435 792 447 806 462 815C 462 815 462 815 462 815" /></svg>
                                    </div>

                                    <img className="cursor-pointer w-7 h-7 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="Rounded avatar"></img>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar