import React from "react";
import { FaCar, FaTruck, FaBicycle } from "react-icons/fa"; // Import React Icons

export const Pricing = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
       
        <h1 className="text-center">Parking Options and Rates</h1>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="premium-card text-center py-5 px-4">
              <div className="premium-price">
                <sup>tk</sup>
                <span className="pricess">300</span>
                <sub>/day</sub>
              </div>
              <h2 className="mt-4 fw-bolder">Premium</h2>
              <p className="text-secondary">
                This plan includes all of the services that come with a parking
                space!
              </p>
              <button className="btn btn-primary animated-btn text-white font-bold fs-5 px-3 mt-4">
                Book Now
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="premium-card text-center py-5 px-4">
              <div className="premium-price">
                <sup>tk</sup>
                <span>500</span>
                <sub>/day</sub>
              </div>
              <h2 className="mt-4 fw-bolder">Gold</h2>
              <p className="text-secondary">
                Includes premium parking, valet service, and 24/7 security!
              </p>
              <button className="btn btn-primary animated-btn text-white font-bold fs-5 px-3 mt-4">
                Book Now
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="premium-card text-center py-5 px-4">
              <div className="premium-price">
                <sup>tk</sup>
                <span>800</span>
                <sub>/day</sub>
              </div>
              <h2 className="mt-4 fw-bolder">Standard</h2>
              <p className="text-secondary">
                Basic parking plan with security and time-based pricing.
              </p>
              <button className="btn btn-primary animated-btn text-white font-bold fs-5 px-3 mt-4">
                Book Now
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="premium-card text-center py-5 px-4">
              <div className="premium-price">
                <sup>tk</sup>
                <span>1500</span>
                <sub>/day</sub>
              </div>
              <h2 className="mt-4 fw-bolder">VIP</h2>
              <p className="text-secondary">
                Exclusive VIP parking with reserved slots and priority access.
              </p>
              <button className="btn btn-primary animated-btn text-white font-bold fs-5 px-3 mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
