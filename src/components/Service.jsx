import React, { useState } from "react";
import { allCategoryAPI } from "../api/allapi.js";
import { FaCalendarAlt, FaCar, FaHeart, FaParking, FaRegClock, FaShoppingBag, FaStar } from "react-icons/fa";
import carimg from "../assets/img/c.jpg";

export const Service = () => {
  const [allCat, setAllCat] = useState([]);

  const AllCategory = async () => {
    const data = await allCategoryAPI();
    setAllCat(data);
    console.log(data);
  };

  useState(() => {
    AllCategory();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Vehicle Categories All list and Price </h2>

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price per Hour (TK)</th>
              <th>Total Slots</th>
              <th>Available Slots</th>
            </tr>
          </thead>
          <tbody>
            {allCat.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>TK {category.price_p_h}</td>
                <td>{category.total_slots}</td>
                <td>{category.available_slots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container">
        <div className="row p-3 ">
        
          <div className="col-md-4 mb-4">


          <div className="card my-3 border-0">
              <div className="card-body d-flex gap-4 align-items-center">
               
                <div className="text-end">
                  <h3 className="card-title py-2 ">Valet Parking</h3>
                  <p className="card-text">
                  A service where attendants park and retrieve vehicles for convenience.
                  </p>
                </div>
                
                <div className="me-3">
                  <FaParking color="#14be3d" size={30} />
                </div>

               
              
              </div>
            </div>


            <div className="card my-3 border-0">
              <div className="card-body d-flex gap-4 align-items-center">
               
                <div className="text-end">
                  <h3 className="card-title ">Short-Term Lot</h3>
                  <p className="card-text">
                  Close parking for quick visits, with higher hourly rates.
                  </p>
                </div>
                
                <div className="me-3">
                  <FaCalendarAlt  color="#14be3d" size={30} />
                </div>

             
              
              </div>
            </div>
              <div className="card my-3 border-0">
              <div className="card-body d-flex gap-4 align-items-center">
             
                <div className="text-end">
                  <h3 className="card-title">Long-Term Lot</h3>
                  <p className="card-text">
                  Ideal for extended stays, typically offering lower daily rates.
                  </p>
                </div>
                
                <div className="me-3">
                  <FaRegClock color="#14be3d" size={30} />
                </div>

              
              
              </div>
            </div>
          </div>

         
          <div className="col-md-4 mb-4">
            <img src={carimg} className="img-fluid" alt="Placeholder" />
          </div>

         
          <div className="col-md-4 mb-4">
            <div className="card my-3 border-0">
              <div className="card-body d-flex  gap-4 align-items-center">
               
                <div className="me-3">
                  <FaShoppingBag color="#14be3d" size={30} />
                </div>

           
                <div>
                  <h3 className="card-title">Economy Lot</h3>
                  <p className="card-text">
                  Budget-friendly parking, often farther from main destinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card my-3 border-0">
              <div className="card-body gap-4 d-flex align-items-center">
                
                <div className="me-3">
                  <FaStar color="#14be3d"  size={30} />
                </div>

             
                <div>
                  <h3 className="card-title">Premium Parking</h3>
                  <p className="card-text">
                  Close parking for quick visits, with higher hourly rates.
                  </p>
                </div>
              </div>
            </div>


            
            <div className="card my-3 border-0">
              <div className="card-body gap-4 d-flex align-items-center">
                
                <div className="me-3">
                  <FaCar color="#14be3d"  size={30} />
                </div>

                
                <div>
                  <h3 className="card-title">Parking Garage</h3>
                  <p className="card-text">
                  A service where attendants park and retrieve vehicles for convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
