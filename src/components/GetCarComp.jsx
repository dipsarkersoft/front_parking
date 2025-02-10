import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { cheakTotalBill, paymentAPI } from "../api/allapi.js";

export const GetCarComp = () => {


  const token=localStorage.getItem('token') 

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [cheakbilInf,setCheakbilInf]=useState(null)
  const [timeLeft, setTimeLeft] = useState(null);
  const fileRef = useRef();

  const {id}=useParams()

  const handleClick = () => {
    fileRef.current.click();
  };



  useEffect(() => {
    if (cheakbilInf) {
      setTimeLeft(300); // 5 minutes (300 seconds)
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

     
      setTimeout(() => {
        setCheakbilInf(null);
        toast.error("Time expired! Please scan QR code again.");
      }, 300000); 

      return () => clearInterval(timer);
    }
  }, [cheakbilInf]);


  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      try {
        const result = await QrScanner.scanImage(selectedFile);
        setData(result); 
      } 
      catch (error) {
        console.error( error);
        setData(null); 
      }
    }
  };

  const handleCheckTotalBill = async() => {
    if (data) {

      const body={
        'ticket':data
      }

      const res=await cheakTotalBill(token,body,id)

      setCheakbilInf(res);
      toast.error(res.message);
      console.log(cheakbilInf)
    } 
    else {
      toast.error("No valid QR code.");
    }
  };



  const handleConfirmPayment = async () => {

     const body={
      'totalammount':cheakbilInf.total_price

     }
      const data=await paymentAPI(token,body)
      
      if(data.transId){

        window.location.replace(data.data.GatewayPageURL);
        localStorage.setItem("transId", JSON.stringify(data.transId));
        localStorage.setItem("id", JSON.stringify(id));
        localStorage.setItem("totalprice", JSON.stringify(cheakbilInf.total_price));
        

      }
   
  };


  return (
    <>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-4 text-center">Verify Parking Ticket</h4>

             
              <input
                type="file"
                ref={fileRef}
                onChange={handleChange}
                accept=".png,.jpg,.jpeg"
                className="d-none"
              />

            
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-success w-100 mb-3"
              >
                Scan QR
              </button>

              {data && (
                <div className="alert alert-info">

                
                  <strong>ID</strong> {data}
                  <br />
              
                </div>
              )}

           
              

       
              {data && (
                <button
                  type="button"
                  onClick={handleCheckTotalBill}
                  className="btn btn-warning w-100 mt-3"
                >
                  Check Total Bill
                </button>
              )}

             {cheakbilInf && (
                <div className="alert alert-info">

                  <strong className="fw-semibold text-danger">Please Pay Under 5 Minutes otherwise Payment Key will expired.</strong> 
                  <br />
                 
                  <br />
                  <strong>Parking ID:</strong> {cheakbilInf.parking_id}
                  <br />
                  <strong>Total Price:</strong> {cheakbilInf.total_price}
                </div>
              )}

              
             {cheakbilInf && (
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="btn btn-primary w-100 mt-3"
                  disabled={timeLeft === 0}
                >
                  {timeLeft === 0 ? "Time Expired" : "Confirm Payment"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
