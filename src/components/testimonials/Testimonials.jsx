import React from "react";
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const data = [
    {
        avatar: AVTR1,
        name: 'Tina Solsa',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nulla maxime velit eligendi fuga'
    },
    {
        avatar: AVTR2,
        name: 'Alexandre Roberto',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nulla maxime velit eligendi fuga'
    },
    {
        avatar: AVTR3,
        name: 'Jesus Nascimento',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nulla maxime velit eligendi fuga'
    },
    {
        avatar: AVTR4,
        name: 'Maria José',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nulla maxime velit eligendi fuga'
    },

]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testemonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testemonial" >
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials