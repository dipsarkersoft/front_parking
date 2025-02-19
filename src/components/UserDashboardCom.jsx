import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { AllParkingList } from "./AllParkingList.jsx";
import { ParkingCreatePage } from "../pages/ParkingCreatePage.jsx";
import { CategoryCreate } from "./CategoryCreate.jsx";
import { useAuth } from "../contex/useAuth.jsx";
import {
  DashboardOutlined,
  HomeOutlined,
  CarOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AllOverview } from "./AllOverview.jsx";

const { Sider, Content } = Layout;

export const UserDashboardComponents = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  
  const defaultTab = user.account_type === "User" ? "allpark" : "overview";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const menuItems = [
    ...(user.account_type !== "User"
      ? [
          {
            key: "overview",
            icon: <DashboardOutlined />,
            label: "Dashboard",
            onClick: () => setActiveTab("overview"),
          },
          {
            key: "categoryCreate",
            icon: <AppstoreAddOutlined />,
            label: "Category",
            onClick: () => setActiveTab("categoryCreate"),
          },
        ]
      : []),

    {
      key: "allpark",
      icon: <HomeOutlined />,
      label: "My Parking List",
      onClick: () => setActiveTab("allpark"),
    },
    {
      key: "Park_Vehicales",
      icon: <CarOutlined />,
      label: "Park Vehicles",
      onClick: () => setActiveTab("Park_Vehicales"),
    },
    
  ];

  return (
    <Layout>
    
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ backgroundColor: "#f5f5f5" }}>
        <Menu
          className="mt-5"
          mode="inline"
          selectedKeys={[activeTab]}
          items={menuItems} 
          style={{ backgroundColor: "#f5f5f5" }} 
        />
      </Sider>

      <Layout>
  
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
          {activeTab === "Park_Vehicales" && <ParkingCreatePage key={activeTab} />}
          {activeTab === "categoryCreate" && <CategoryCreate key={activeTab} />}
          {activeTab === "overview" && <AllOverview key={activeTab} />}
        </Content>
      </Layout>
    </Layout>
  );
};
