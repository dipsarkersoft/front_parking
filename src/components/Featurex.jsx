import React from "react";
import {
  FaParking,
  FaCar,
  FaPlug,
  FaBatteryFull,
  FaTools,
} from "react-icons/fa";
import { PiTire } from "react-icons/pi";

export const Featurex = () => {
  const features = [
    { icon: <FaParking />, title: "Open Air & Covered Parking" },
    { icon: <FaCar />, title: "Parking Open 24 Hours" },
    { icon: <FaPlug />, title: "Electric Vehicle Charging" },
    { icon: <FaBatteryFull />, title: "Free Battery Jump Service" },
    { icon: <PiTire />, title: "Free Tire Inflation Service" },
    { icon: <FaTools />, title: "Guaranteed Reservations" },
  ];

  return (
    <div>
      <div className="container-fluid featuresmain mt-5 py-5">
        <h2 className="text-center semibold">Parking Amenities</h2>
       <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6 col-6">
              <div className="feature-card text-center py-4 px-3">
                <div className="icon">{feature.icon}</div>
                <p className="mt-3">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
