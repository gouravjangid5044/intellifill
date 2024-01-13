import React from 'react'
import { useContext } from 'react'
import Sitecontext from '../context/Sitecontext'
import { Link } from 'react-router-dom'
const Side_menu = () => {
    const { isChecked, exam_data } = useContext(Sitecontext)
    return (
        <>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Exam you might interested in</h2>
            <div id="card2" className='dark:bg-gray-900 dark:text-white border-solid border-slate-200 dark:border-slate-600' style={{ borderWidth: "2px", borderRadius: "5px", padding: "5px" }}>
                {
                    exam_data.map((element) => {
                        return <>
                            <div className='child_1'>
                                <div style={{ width: "15%", padding: "3px", borderWidth: "1px", borderRadius: "5px" }} className='child_1_1 border-solid border-slate-200 dark:border-slate-600'>
                                    <img style={{ height: "100%", width: "100%", borderRadius: "5px" }} src={element.img}></img>
                                </div>
                                <div style={{ width: "60%" }} className='child_1_2 flex justify-center items-flex-start flex-col'>
                                    <h5 class="text-sm font-bold dark:text-white">{element.exam_name}</h5>
                                    <p class="text-blue-500 dark:text-gray-400" style={{ fontSize: "13px" }}>{element.organization}</p>
                                </div>
                                <div style={{ width: "20%" }} className='child_1_3  flex justify-center items-center'>
                                    <svg style={{ marginTop: "2px", cursor: "pointer" }} width="20" height="20" fill='blue' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 650 63C 712 63 763 113 763 175C 763 175 763 875 763 875C 763 900 749 924 727 936C 705 947 678 945 656 932C 656 932 531 857 531 857C 512 846 504 844 500 844C 496 844 488 846 469 857C 469 857 344 932 344 932C 322 945 295 947 273 936C 251 924 238 900 238 875C 238 875 238 175 238 175C 238 113 288 63 350 63C 350 63 650 63 650 63M 313 175C 313 175 313 864 313 864C 313 864 431 793 431 793C 453 779 475 769 500 769C 525 769 547 779 569 793C 569 793 688 864 688 864C 688 864 688 175 688 175C 688 154 671 138 650 138C 650 138 350 138 350 138C 329 138 313 154 313 175C 313 175 313 175 313 175" /></svg>
                                    <svg style={{ marginTop: "2px", cursor: "pointer" }} width="20" height="20" viewBox="0 0 1000 1000" fill={`${isChecked ? "#2563eb" : "black"}`} xmlns="http://www.w3.org/2000/svg"><path d="M 750 88C 750 88 750 88 750 88C 839 88 912 161 912 250C 912 339 839 412 750 412C 705 412 664 394 634 364C 634 364 411 476 411 476C 412 484 412 492 412 500C 412 509 412 517 411 525C 411 525 634 637 634 637C 663 606 705 588 750 588C 839 588 912 661 912 750C 912 839 839 912 750 912C 661 912 588 839 588 750C 588 742 588 734 589 726C 589 726 365 614 365 614C 336 644 295 663 250 663C 161 663 88 589 88 500C 88 411 161 337 250 337C 295 337 336 356 366 387C 366 387 589 274 589 274C 588 266 588 258 588 250C 588 161 661 88 750 88"/></svg>                                </div>
                            </div>


                            <div className='child_2'>
                                <div className='flex items-center' style={{ paddingLeft: "5%" }}>

                                    {/* <svg width="16" height="16" viewBox="0 0 1000 1000"  xmlns="http://www.w3.org/2000/svg"><path d="M 500 143C 500 143 500 143 500 143C 543 143 584 160 615 191C 645 221 663 263 663 306C 662 396 590 468 500 468C 410 468 337 396 337 306C 337 263 355 221 385 191C 416 160 457 143 500 143M 209 306C 209 306 209 306 209 306C 233 306 256 315 272 332C 289 349 299 372 299 396C 299 446 258 486 209 486C 159 486 118 446 118 396C 118 372 128 349 145 332C 162 315 185 306 209 306M 787 306C 787 306 787 306 787 306C 811 306 834 315 851 332C 868 349 878 372 878 396C 878 446 837 486 787 486C 738 486 697 446 697 396C 697 372 707 349 724 332C 741 315 764 306 787 306M 149 514C 189 524 189 526 209 526C 229 526 231 524 271 514C 308 514 335 527 350 551C 263 559 205 605 184 682C 184 682 88 682 88 682C 68 682 52 666 52 646C 52 646 52 610 52 610C 52 550 88 514 149 514C 149 514 149 514 149 514M 727 514C 767 524 767 526 787 526C 808 526 810 524 850 514C 910 514 944 550 944 610C 944 610 944 646 944 646C 944 666 928 682 908 682C 908 682 817 682 817 682C 796 603 738 556 647 550C 663 527 691 514 727 514C 727 514 727 514 727 514M 633 575C 689 576 729 592 756 620C 784 649 800 692 800 750C 800 750 800 825 800 825C 800 853 778 875 750 875C 750 875 250 875 250 875C 222 875 200 853 200 825C 200 825 200 750 200 750C 200 693 217 650 246 621C 274 592 316 576 372 575C 411 585 431 591 447 595C 464 599 478 600 500 600C 522 600 536 599 555 595C 572 591 594 585 633 575C 633 575 633 575 633 575" /></svg> */}
                                    <svg width="16" height="16" viewBox="0 0 1000 1000" fill={`${isChecked ? "#2563eb" : "black"}`} xmlns="http://www.w3.org/2000/svg"><path d="M 500 143C 500 143 500 143 500 143C 543 143 584 160 615 191C 645 221 663 263 663 306C 662 396 590 468 500 468C 410 468 337 396 337 306C 337 263 355 221 385 191C 416 160 457 143 500 143M 209 306C 209 306 209 306 209 306C 233 306 256 315 272 332C 289 349 299 372 299 396C 299 446 258 486 209 486C 159 486 118 446 118 396C 118 372 128 349 145 332C 162 315 185 306 209 306M 787 306C 787 306 787 306 787 306C 811 306 834 315 851 332C 868 349 878 372 878 396C 878 446 837 486 787 486C 738 486 697 446 697 396C 697 372 707 349 724 332C 741 315 764 306 787 306M 149 514C 189 524 189 526 209 526C 229 526 231 524 271 514C 308 514 335 527 350 551C 263 559 205 605 184 682C 184 682 88 682 88 682C 68 682 52 666 52 646C 52 646 52 610 52 610C 52 550 88 514 149 514C 149 514 149 514 149 514M 727 514C 767 524 767 526 787 526C 808 526 810 524 850 514C 910 514 944 550 944 610C 944 610 944 646 944 646C 944 666 928 682 908 682C 908 682 817 682 817 682C 796 603 738 556 647 550C 663 527 691 514 727 514C 727 514 727 514 727 514M 633 575C 689 576 729 592 756 620C 784 649 800 692 800 750C 800 750 800 825 800 825C 800 853 778 875 750 875C 750 875 250 875 250 875C 222 875 200 853 200 825C 200 825 200 750 200 750C 200 693 217 650 246 621C 274 592 316 576 372 575C 411 585 431 591 447 595C 464 599 478 600 500 600C 522 600 536 599 555 595C 572 591 594 585 633 575C 633 575 633 575 633 575" /></svg>
                                    <h5 class="text-sm font-medium dark:text-white ml-2">{element.enrolled}</h5>
                                </div>

                                <div className='flex items-center justify-between' style={{ paddingLeft: "5%" }}>
                                    <div className='flex items-center justify-center'>
                                    <svg width="16" height="16" viewBox="0 0 1000 1000" fill={`${isChecked ? "#2563eb" : "black"}`} xmlns="http://www.w3.org/2000/svg"><path d="M 607 115C 631 141 646 175 653 210C 653 210 824 210 824 210C 824 210 764 300 764 300C 764 300 654 300 654 300C 635 444 497 526 350 534C 350 534 707 981 707 981C 707 981 553 981 553 981C 553 981 208 549 208 549C 208 549 208 465 208 465C 208 465 294 465 294 465C 472 465 526 365 526 301C 526 300 526 300 526 300C 526 300 175 300 175 300C 175 300 235 210 235 210C 235 210 515 210 515 210C 477 123 381 115 278 115C 278 115 175 115 175 115C 175 115 235 25 235 25C 235 25 824 25 824 25C 824 25 764 115 764 115C 764 115 607 115 607 115" /></svg>
                                    <h5 class="text-sm font-medium dark:text-white ml-2">{element.price}</h5>
                                    </div>
                                    <Link to="/" className="text-blue-700 hover:text-blue-800 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:text-blue-600 dark:hover:text-blue-700" style={{alignSelf:"flex-end"}}>
                                        View details
                                    <svg style={{marginTop:"3px",marginLeft:"5px"}} fill="blue" width="16" height="16" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 165 565C 165 565 465 265 465 265C 484 245 516 245 535 265C 535 265 835 565 835 565C 855 584 856 616 836 636C 816 656 784 655 765 635C 765 635 500 371 500 371C 500 371 235 635 235 635C 221 650 200 655 181 647C 162 639 150 621 150 601C 150 587 155 574 165 565C 165 565 165 565 165 565" transform="rotate(90,500,500)"/></svg>
                                    </Link>
                                </div>

                            </div>


                            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        </>
                    })
                }



                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "5%" }}>
                    <div style={{ width: "100%" }} className='flex justify-center items-center'>
                        <Link style={{ width: "110px" }} to={`/`} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View All
                            {/* <svg style={{marginTop:"3px",marginLeft:"5px"}} fill="blue" width="16" height="16" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 165 565C 165 565 465 265 465 265C 484 245 516 245 535 265C 535 265 835 565 835 565C 855 584 856 616 836 636C 816 656 784 655 765 635C 765 635 500 371 500 371C 500 371 235 635 235 635C 221 650 200 655 181 647C 162 639 150 621 150 601C 150 587 155 574 165 565C 165 565 165 565 165 565" transform="rotate(90,500,500)"/></svg> */}
                        </Link>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Side_menu