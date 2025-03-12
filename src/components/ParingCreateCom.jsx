import React, { useEffect, useState } from "react";
import {
  allCategoryAPI,
  availableSlotAPI,
  createParking,
} from "../api/allapi.js";
import toast from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";
import { LoadingComponent } from "./utils/LoadingComponent.jsx";
import { Loadingd } from "./utils/Loadingd.jsx";

const { RangePicker } = DatePicker;

export const ParingCreateCom = () => {
  const [carName, setCarName] = useState("");
  const [parkingSlot, setParkingSlot] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryinf, setCategoryinf] = useState(null);
  const [createRes, setCreateRes] = useState(null);
  const [qrValue, SetQrvalue] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingFull, setLoadingFull] = useState(false);
  const [loadingbtn, setLoadingbtn] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getcat = async () => {
    try {
      setLoadingFull(true);
      const data = await allCategoryAPI();
      if (data) {
        setCategories(data);
        setLoadingFull(false);
      }
    } catch (error) {}
  };

  const handleDateChange = (v) => {
   
    
   
    if (v) {
      setDateRange([
        v[0].format("YYYY-MM-DDTHH:mm-ss"),
        v[1].format("YYYY-MM-DDTHH:mm-ss"),
      ]);
      
    } 
    else {
      setDateRange([]);
    }
    
  };
 


  const getavailableSlot = async () => {
    try {
      
      const st = dateRange[0];
      const et = dateRange[1];
      const catid = categoryinf.id;
     
      const { data } = await availableSlotAPI(token, catid, st, et);

      if (data) {
        setAvailableSlots(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryinf || !carName) {
      toast.error("All Inf Required");
    } else {
      
      
      try{

        const body = {
          category: categoryinf.id,
          car_name: carName,
          slot: parkingSlot,
          start_park: dateRange[0],
          end_park: dateRange[1],
        };

        setLoadingbtn(true)

        const data = await createParking(token, body);
        console.log(data);
        if (data?.status == 201) {
          setCreateRes(data?.data);
          setLoadingbtn(false)
          SetQrvalue(data?.data?.ticket);
          toast.success("Thanks For Parking");
        }



      }
      catch(error){

           setLoadingbtn(false)
        console.log(error)
      }
      
     

    

    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = url;
      link.download = `${carName}-qr-ticket.png`;
      link.click();
      setCategories([]);
      setCarName("");
      SetQrvalue("");
      navigate("/");
    }
  };

  useEffect(() => {
    getcat();
  }, []);

  useEffect(() => {
    
   

    if (categoryinf && dateRange?.length === 2) {
       setLoading(true);
      getavailableSlot();
    }
  }, [categoryinf, dateRange]);

  return (
    <div className="container mt-4">
      <div className="row  ">
        <h3 className="mb-3">Park Your Vehicle</h3>

        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            {loadingFull ? (
              <>
                <LoadingComponent />
              </>
            ) : (
              <>
                <h5 className="mb-3">Fill Your Vehicle Information</h5>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={categoryinf ? categoryinf.id : ""}
                    onChange={(e) => {
                      const selectedCategory = categories.find(
                        (cat) => cat.id == parseInt(e.target.value)
                      );
                      setCategoryinf(selectedCategory);
                    }}
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Car Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter car name"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-danger fw-semibold">
                    {" "}
                    Select Your Parking Date to Sea Available{" "}
                  </label>
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      showTime={{ format: "HH:mm" }}
                      format="YYYY-MM-DD HH:mm"
                      onChange={handleDateChange}
                    />
                  </Space>
                </div>

                {loading ? (
                  <Loadingd/>
                ) : (
                  <>
                    {availableSlots?.length > 0 ? (
                      <>
                        <h3>Available Slot List</h3>
                        <div className="container border m-3">
                          <div className="row p-3">
                            {availableSlots.map((slot) => (
                              <>
                                {console.log(slot)}
                                <div key={slot.id} className="col-2 m-1">
                                  <p className="text-center">
                                    {slot.slot_number}
                                  </p>
                                  <button
                                    className="btn btn-success w-100"
                                    onClick={() => setParkingSlot(slot.id)}
                                  >
                                    <FaCheck color="#e91e63" />
                                  </button>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-muted">
                        Select a date range to see slots
                      </p>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="col-md-6">
          {qrValue && (
            <>
              <div className="text-center mb-4">
                <QRCodeCanvas value={qrValue} size={256} />
              </div>
              <button
                className="btn btn-success my-4 w-100"
                onClick={handleDownload}
              >
                Download Ticket
              </button>
            </>
          )}

          <div className="card p-4 shadow-sm">
            {loadingFull ? (
              <>
                <LoadingComponent />
              </>
            ) : (
              <>
                <h4 className="mb-3">Parking Slot Selection</h4>

                <li className="list-group-item">
                  <strong>Available Slots:</strong>{" "}
                  {categoryinf?.available_slots || "Not selected"}
                </li>

                <h6 className="mt-3">Overview</h6>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <strong>Category:</strong>{" "}
                    {categoryinf ? categoryinf.name : "Not selected"}
                  </li>

                  <li className="list-group-item">
                    <strong>Car Name:</strong> {carName || "Not selected"}
                  </li>
                  <li className="list-group-item">
                    <strong>Parking Slot:</strong>{" "}
                    {parkingSlot || "Not selected"}
                  </li>
                </ul>

                <button
                  onClick={handleSubmit}
                  disabled={loadingbtn}
                  className={`btn btn-primary w-100 ${loadingbtn?"bg-secoundary text-dark " :"" } `} 
                >
                  {loadingbtn ? (
                        <>
                            Parking...
                          <span className="spinnerbtn"></span>
                        </>
                      ) : (
                        "   Confirm Parking "
                      )}


                
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
