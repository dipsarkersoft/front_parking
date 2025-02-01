import React, { useEffect, useState } from "react";
import { allCategoryAPI, createParking } from "../api/allapi.js";
import toast from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ParingCreateCom = () => {
  const [carName, setCarName] = useState("");
  const [parkingSlot, setParkingSlot] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryinf, setCategoryinf] = useState(null);
  const [createRes, setCreateRes] = useState(null);
  const [qrValue, SetQrvalue] = useState(null);
  const navigate=useNavigate()

  const token = localStorage.getItem("token");

  const getcat = async () => {
    const data = await allCategoryAPI();
    setCategories(data);
  };

  useEffect(() => {
    getcat();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryinf || !carName ||!parkingSlot) {
      toast.error("All Inf Required");
    } else {
      const body = {
        "category": categoryinf.id,
        "car_name": carName,
        "slot":parkingSlot
      };

      const data = await createParking(token, body);
      console.log(data)
      if (data?.status == 201) {
        setCreateRes(data.data);
        SetQrvalue(data.data.ticket);

        toast.success("Thanks For Parking");
       
        
      }

      // console.log("Selected Category:", categoryinf);
      // console.log("Car Name:", carName);
      // console.log("Parking Slot:", parkingSlot);
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
      navigate('/')
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left side form */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Select Vehicle Details</h5>

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

            {/* Car Name Input */}
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

            <h3>Available Seat List</h3>


            {categoryinf?.available_slots_list ? (
            <div className="container border m-3">
              <div className="row p-3">
                {Object.entries(categoryinf.available_slots_list).map(
                  ([slot, status], index) => (


                   
                    <div key={slot} className="col-1 p-1">
                      <button
                        className={`btn w-100 ${
                          status === "B" ? "btn-danger" : "btn-success"
                        }`
                    }   onClick={() => setParkingSlot(slot)}
                        disabled={status === "B"}
                      >
                        {status=='B'?
                        <> <RxCross1 color="#fffff" /></>
                        :<>
                         
                        <FaCheck color="#e91e63" />
                        </>}
                        
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <p>No category selected</p>
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
                className="btn btn-success w-100"
                onClick={handleDownload}
              >
                Download Ticket
              </button>
            </>
          )}

          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Parking Slot Selection</h4>

            <li className="list-group-item">
              <strong>Available Slots:</strong>{" "}
              {categoryinf?.available_slots || "Not selected"}
            </li>

            {/* Overview */}
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
                <strong>Parking Slot:</strong> {parkingSlot || "Not selected"}
              </li>
            </ul>

            <button onClick={handleSubmit} className="btn btn-primary w-100">
              Confirm Parking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
