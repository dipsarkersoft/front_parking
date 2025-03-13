import React from "react";
import { FaImages } from "react-icons/fa";

import s1 from "../assets/img/slid1.jpg"
import s2 from "../assets/img/slide2.jpg"
import s3 from "../assets/img/slide3.jpg"
import s4 from "../assets/img/slide4.jpg"

export const ImageGalary = () => {
   return (
    <div>
    <div className="container my-5">
      <h3 className="fs-3 py-3">
        <FaImages size={48} /> Our Galary 
      </h3>

      <div
        id="mangoCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#mangoCarousel"
            data-bs-slide-to="3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={s1}
              className="d-block w-100 custom-slide"
              alt="Covered Parking"
            />
            <div className="carousel-caption custom-caption">
              <h3>Covered Parking Spaces</h3>
              <p>Protect your vehicle from the elements</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={s2}
              className="d-block w-100 custom-slide"
              alt="24/7 Parking"
            />
            <div className="carousel-caption custom-caption">
              <h3>Parking Open 24/7</h3>
              <p>Your vehicle is safe, anytime</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={s3}
              className="d-block w-100 custom-slide"
              alt="Electric Vehicle Charging"
            />
            <div className="carousel-caption custom-caption">
              <h3>Electric Vehicle Charging</h3>
              <p>Recharge your EV while you park</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={s4}
              className="d-block w-100 custom-slide"
              alt="Reserved Parking"
            />
            <div className="carousel-caption custom-caption">
              <h3>Guaranteed Reservations</h3>
              <p>Book your spot in advance and secure parking</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mangoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mangoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
      );
};
