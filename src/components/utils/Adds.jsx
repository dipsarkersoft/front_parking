import React from "react";
import { Link } from "react-router-dom";

export const Adds = () => {
  return (
    // <div>
    //   <div className="container-fluid Ads1  ">
    //     <div className="Adsc container d-flex ">
    //       <div className="col-md-9 Adsc1">Save money by pre-booking online</div>

    //       <div className="col-md-3 text-end Adsc2">
    //         <div className=" btnBookSlot">
    //           <Link to="/register"> Pick Your Parking Slot</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



    <div>
    <div className="container-fluid Ads1">
      <div className="Adsc container d-flex flex-column flex-md-row">

        <div className="col-md-9 Adsc1">
          Save money by pre-booking online
        </div>

        <div className="col-md-3 text-end Adsc2">
          <div className="btnBookSlot">
            <Link to="/register">Pick Your Parking Slot</Link>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};
