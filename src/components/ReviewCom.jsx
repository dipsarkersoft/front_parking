import React from 'react'
import image1 from "../assets/img/1test.jpg"
import image2 from "../assets/img/2test.jpg"
import image3 from "../assets/img/3test.jpg"
import image4 from "../assets/img/4test.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';



export const ReviewCom = () => {


    const reviews = [
        {
          id: 1,
          image: image1,
          name: 'John Doe',
          review: 'Easy to navigate, fast booking, and great customer support service.',
          rating: 5
        },
        {
          id: 2,
          image: image2,
          name: 'Jane Smith',
          review: 'Great system! Saves me so much time and ensures my vehicle is safe.',
          rating: 4
        },
        {
          id: 3,
          image: image3,
          name: 'Mark Johnson',
          review: 'Efficient, easy to use, and reliable parking management system.',
          rating: 5
        },
        {
            id: 4,
            image:  image4,
            name: 'Mark Johnson',
            review: 'Easy to navigate, fast booking, and great customer support service..',
            rating: 5
          },
          {
            id: 5,
            image:  image3,
            name: 'Mark Johnson',
            review: 'Efficient, easy to use, and reliable parking management system.',
            rating: 5
          },
        // Add more reviews as needed
      ];
  return (
    <div>


<div className="container-fluid reviewSec my-5 ">
  <div className="container">
      
      <div className="text-center   mb-4">
        <h2>What Our Users Say</h2>
        <p className="lead">Real reviews from our satisfied customers.</p>
      </div>

      <Swiper
        spaceBetween={30}  
        slidesPerView={3} 
        navigation 
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2,  
          },
          1024: {
            slidesPerView: 3,  
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card p-3 shadow-sm">
              <div className="d-flex align-items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div className="ms-3">
                  <h5>{review.name}</h5>
                  <div>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FaStar key={index} className="text-warning" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </div>


    </div>
  )
}

