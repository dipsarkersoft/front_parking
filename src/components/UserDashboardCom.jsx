import React, { useState } from "react";
import { AllParkingList } from "./AllParkingList.jsx";
import { ParkingCreatePage } from "../pages/ParkingCreatePage.jsx";
import { CategoryCreate } from "./CategoryCreate.jsx";
import { useAuth } from "../contex/useAuth.jsx";

export const UserDashboardComponents = () => {
  const [activeTab, setActiveTab] = useState("allpark");
  const { user } = useAuth();
  
  return (
    <div>
      <div className="container mt-4">
       
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
              className={`nav-link ${
                activeTab === "Park_Vehicales" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Park_Vehicales")}
            >
              Park Vehicales
            </button>
          </li>

          {user.account_type !='User'? (
            <>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "categoryCreate" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("categoryCreate")}
                >
                  Category Create
                </button>
              </li>
            </>
          ) : 
          (
            <>
            </>
          )}
        </ul>

      
        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              activeTab === "allpark" ? "show active" : ""
            }`}
          >
            <AllParkingList key={activeTab === "allpark" ? 1 : 0} />
          </div>

          <div
            className={`tab-pane fade ${
              activeTab === "Park_Vehicales" ? "show active" : ""
            }`}
          >
            <ParkingCreatePage key={activeTab === "Park_Vehicales" ? 1 : 0} />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "categoryCreate" ? "show active" : ""
            }`}
          >
            <CategoryCreate key={activeTab === "categoryCreate" ? 1 : 0} />
          </div>
        </div>
      </div>
    </div>
  );
};
