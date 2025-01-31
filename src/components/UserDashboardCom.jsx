import React, { useState } from 'react'
import { AllParkingList } from './AllParkingList.jsx';
import { ParkingCreatePage } from '../pages/ParkingCreatePage.jsx';

export const UserDashboardComponents = () => {

    const [activeTab, setActiveTab] = useState("allpark");

  return (
    <div>
    <div className="container mt-4">
      {/* Navigation Pills */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "allpark" ? "active" : ""}`}
            onClick={() => setActiveTab("allpark")}
          >
            My Parking List
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "Park_Vehicales" ? "active" : ""}`}
            onClick={() => setActiveTab("Park_Vehicales")}
          >
            Park Vehicales
          </button>
        </li>
       
       
      </ul>

      {/* Tab Content */}
      <div className="tab-content">


        <div className={`tab-pane fade ${activeTab === "allpark" ? "show active" : ""}`}>
        <AllParkingList/>
        </div>


        <div className={`tab-pane fade ${activeTab === "Park_Vehicales" ? "show active" : ""}`}>
         <ParkingCreatePage/>
        </div>
        
        
      


      </div>
    </div>



    </div>
  )
}
