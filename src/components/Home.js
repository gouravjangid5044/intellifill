import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import '../slider.css'
import '../home.css'
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='w-full dark:bg-gray-900' style={{marginTop:"-8px",paddingTop:"40px"}}>
                <div className='mx-auto h-full' id="home_slider" >
                    <Swiper navigation={true} pagination={true} modules={[Navigation,Pagination]} className="mySwiper" style={{borderRadius: "10px"}}>
                        <SwiperSlide>
                            <img style={{ objectFit: "fill", height: "100%", width: "100%",borderRadius: "10px" }} src="https://as2.ftcdn.net/v2/jpg/03/57/29/81/1000_F_357298181_odMmwZSuTgFryoyeRb6m9cG6hOXaFT4u.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{ objectFit: "fill", height: "100%", width: "100%",borderRadius: "10px"}} src="https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Fblog%2Fiim-entrance-exam-cat.webp&w=3840&q=100" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{ objectFit: "fill", height: "100%", width: "100%",borderRadius: "10px"}} src="https://www.shutterstock.com/image-vector/data-cloud-storage-elearning-online-260nw-1243806193.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    );
}
