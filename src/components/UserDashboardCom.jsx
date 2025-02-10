// import React, { useState } from "react";
// import { AllParkingList } from "./AllParkingList.jsx";
// import { ParkingCreatePage } from "../pages/ParkingCreatePage.jsx";
// import { CategoryCreate } from "./CategoryCreate.jsx";
// import { useAuth } from "../contex/useAuth.jsx";

// export const UserDashboardComponents = () => {
//   const [activeTab, setActiveTab] = useState("allpark");
//   const { user } = useAuth();

//   return (
//     <div>
//       <div className="container mt-4">

//         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button
//               className={`nav-link ${activeTab === "allpark" ? "active" : ""}`}
//               onClick={() => setActiveTab("allpark")}
//             >
//               My Parking List
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className={`nav-link ${
//                 activeTab === "Park_Vehicales" ? "active" : ""
//               }`}
//               onClick={() => setActiveTab("Park_Vehicales")}
//             >
//               Park Vehicales
//             </button>
//           </li>

//           {user.account_type !='User'? (
//             <>
//               <li className="nav-item" role="presentation">
//                 <button
//                   className={`nav-link ${
//                     activeTab === "categoryCreate" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveTab("categoryCreate")}
//                 >
//                   Category Create
//                 </button>
//               </li>
//             </>
//           ) :
//           (
//             <>
//             </>
//           )}
//         </ul>

//         <div className="tab-content">
//           <div
//             className={`tab-pane fade ${
//               activeTab === "allpark" ? "show active" : ""
//             }`}
//           >
//             <AllParkingList key={activeTab === "allpark" ? 1 : 0} />
//           </div>

//           <div
//             className={`tab-pane fade ${
//               activeTab === "Park_Vehicales" ? "show active" : ""
//             }`}
//           >
//             <ParkingCreatePage key={activeTab === "Park_Vehicales" ? 1 : 0} />
//           </div>
//           <div
//             className={`tab-pane fade ${
//               activeTab === "categoryCreate" ? "show active" : ""
//             }`}
//           >
//             <CategoryCreate key={activeTab === "categoryCreate" ? 1 : 0} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { AllParkingList } from "./AllParkingList.jsx";
import { ParkingCreatePage } from "../pages/ParkingCreatePage.jsx";
import { CategoryCreate } from "./CategoryCreate.jsx";
import { useAuth } from "../contex/useAuth.jsx";
import {
  HomeOutlined,
  CarOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AllOverview } from "./AllOverview.jsx";

const { Header, Sider, Content } = Layout;

export const UserDashboardComponents = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ backgroundColor: "#ffffff" }}
      >
        <Menu
          className="mt-5"
          theme="dark"
          mode="inline"
          selectedKeys={[activeTab]}
        >
          {user.account_type !== "User" && (
            <>
              <Menu.Item
                key="overview"
                icon={<AppstoreAddOutlined />}
                onClick={() => setActiveTab("overview")}
              >
                Dashboard
              </Menu.Item>


              <Menu.Item
                key="categoryCreate"
                icon={<AppstoreAddOutlined />}
                onClick={() => setActiveTab("categoryCreate")}
              >
                Category
              </Menu.Item>
            </>
          )}

          <Menu.Item
            key="allpark"
            icon={<HomeOutlined />}
            onClick={() => setActiveTab("allpark")}
          >
            My Parking List
          </Menu.Item>
          <Menu.Item
            key="Park_Vehicales"
            icon={<CarOutlined />}
            onClick={() => setActiveTab("Park_Vehicales")}
          >
            Park Vehicles
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        {/* Header */}

        {/* Content with scroll */}
        <Content
          style={{
            margin: "20px",
            padding: "30px",
            background: "#fff",
            overflowY: "auto",
            height: "calc(100vh - 64px)",
          }}
        >
          {activeTab === "allpark" && <AllParkingList key={activeTab} />}
          {activeTab === "Park_Vehicales" && (
            <ParkingCreatePage key={activeTab} />
          )}
          {activeTab === "categoryCreate" && <CategoryCreate key={activeTab} />}
          {activeTab === "overview" && <AllOverview key={activeTab} />}
        </Content>
      </Layout>
    </Layout>
  );
};
