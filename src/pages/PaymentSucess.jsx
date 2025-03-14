import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backVehicals } from "../api/allapi.js";
import toast from "react-hot-toast";
import "../assets/css/Payment.css";
import { LoadingComponent } from "../components/utils/LoadingComponent.jsx";

export const PaymentSucess = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isPayment, setIsPayment] = useState(true);
  const token = localStorage.getItem("token");
  const transId = JSON.parse(localStorage.getItem("transId"));
  const totalprice = JSON.parse(localStorage.getItem("totalprice"));
  const VehicalsParkId = JSON.parse(localStorage.getItem("id"));

  const handleBack = async () => {


    const body = {
      trans_ticket: id,
      total_price: totalprice,
    };
    
    const result = await backVehicals(token, body, VehicalsParkId);
    console.log(result);

    if (isPayment && result.status === "Sucess") {
      setIsPayment(false);

      localStorage.removeItem("transId");
      localStorage.removeItem("totalammount");
      // localStorage.removeItem("id");

      toast.success("Payment  Success,Please Get Your Vehicals");

      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && transId && id === transId) {
      handleBack();
    }
  }, [id, transId]);

  return (
    <div>
      {loading ? (
        <>
         <LoadingComponent />
        </>
      ) : (
        <>
          <div className="status-page success-page container d-flex flex-column align-items-center justify-content-center">
            <div className="alert alert-success text-center" role="alert">
              <h1 className="display-4">Success!</h1>
              <p className="lead">
                Your Order And Payment was completed successfully.
              </p>
            </div>
            <Link to="/" className="btn btn-primary mt-3">
              Go to Homepage
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
