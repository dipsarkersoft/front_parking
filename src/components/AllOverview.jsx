import React, { useEffect, useRef, useState } from "react";

import { Card, Col, Row } from "antd";
import { ChartComponents } from "./ChartComponents";
import { allCategoryAPI } from "../api/allapi";
import { MdDashboard } from "react-icons/md";

export const AllOverview = () => {


  const [totalSlots, setTotalSlots] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(0);
  const [psZone, setPsZone] = useState(0);

  

  useEffect(() => {
    const fetchData = async () => {

      const data = await allCategoryAPI();
      const totalSlotsSum = data.reduce((sum, item) => sum + item.total_slots, 0);
      const availableSlotsSum = data.reduce((sum, item) => sum + item.available_slots, 0);
      
      
      setTotalSlots( totalSlotsSum);
      setAvailableSlots(availableSlotsSum);
      setPsZone( data.length);

    };
  
    fetchData();
  }, []);






 


  return (
    <>
   
      <h4 className="p-2 fw-5 text-align center">
      
        Dashboard
        </h4>
      <div className="dashboardCard">



      <h4 className="mb-3 fw-5">Overview</h4>
      <Row gutter={[40, 40]}>
        <Col span={12}>
          <Card
            title="Total Parking Zone"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
           {psZone}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Total Slot"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
            {totalSlots}
          </Card>
        </Col>
      </Row>

      
      <Row gutter={[40, 40]}>
        <Col className="SecCol" span={12}>
          <Card
            title="Available Slot"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
           {availableSlots}
          </Card>
        </Col>
        <Col className="SecCol" span={12}>
          <Card
            title="Total Income"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
            100
          </Card>
        </Col>
      </Row>
      </div>

      <div className="chartcompo">
        <ChartComponents/>
      </div>
    </>
  );
};
