import React from "react";

import "../assets/css/Hero.css";
import image1 from "../assets/img/car1.png";
import image2 from "../assets/img/car2.png";
import image3 from "../assets/img/car3.png";
import { FaCarAlt, FaKey, FaParking, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeroCom = () => {
  return (
    <>
      <div className="hero-section overlay my-4">
        <div className="container hero2">
          <div className="row align-items-center">
            {/* Carousel Section */}
            <div className="col-md-7  p-0">
              <div
                id="heroCarousel"
                className="carousel slide "
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image1}
                      className="d-block w-100 rounded"
                      alt="Parking 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image2}
                      className="d-block w-100 rounded"
                      alt="Parking 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image3}
                      className="d-block w-100 rounded"
                      alt="Parking 3"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"

                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-md-5 text-center text-md-start p-5">
              <h1 className="display-4 fw-bold">
                Smart Vehicle Parking Management
              </h1>
              <p className="lead">
                Effortless, Secure, and Smart Parking Solutions
              </p>
             
              <Link className="btn btn-primary herbtn" to= {"/register"} >
                Get Started
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* card */}

      <div className="card-section ">
        <div className="container ">

          <h2 className="text-center">Why Choose ...</h2>
          <p className="text-center"> We are the official providers of Airport parking You can't park closer!</p>
          <div className="row justify-content-center">
            {/* Card 1 */}
          

            <div className="col-md-4 mb-4">
          <div className="card d-flex flex-row">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
            <FaParking size={50} color="#14be3d" />
            </div>
            <div className="col-md-9 d-flex align-items-center">
              <div className="card-body">
                <h2 className="card-title">Save Money</h2>
                <p className="card-text">Save up to 70% on our site compared to the cost of on-airport parking.</p>
              </div>
            </div>
          </div>
        </div>

            {/* Card 2 */}
            

            <div className="col-md-4 mb-4">
          <div className="card d-flex flex-row">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
            <FaCarAlt size={50} color="#14be3d"/>
            </div>
            <div className="col-md-9 d-flex align-items-center">
              <div className="card-body">
                <h3 className="card-title">Save Times</h3>
                <p className="card-text">It’s easy to compare parking at all major airports. Booking a reservation is quick & simple!</p>
              </div>
            </div>
          </div>
        </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
          <div className="card d-flex flex-row">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <FaUser size={50} color="#14be3d"/>
            </div>
            <div className="col-md-9 d-flex align-items-center">
              <div className="card-body">
                <h2 className="card-title">Save Stress</h2>
                <p className="card-text">Guarantee your parking spot by booking in advance. Can’t make it? Cancellations are free</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};
