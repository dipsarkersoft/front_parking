import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import PrivateRoute from "./contex/PrivetRoute.jsx";
import { OwnerDashboard } from "./pages/OwnerDashboard.jsx";
import { UserDashboard } from "./pages/UserDashboard.jsx";
import { ServicePage } from "./pages/ServicePage.jsx";
import { GetCarPage } from "./pages/GetCarPage.jsx";
import { useAuth } from "./contex/useAuth.jsx";
import { PaymentSucess } from "./pages/PaymentSucess.jsx";
import PaymentFailed from "./pages/PaymentFailed.jsx";

function App() {
  const { user } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />

        <Routes>

  { user? <>
  
    <Route path="payment/sucess/:id/" element={<PaymentSucess/>} />

     <Route path="payment/failed" element={<PaymentFailed/>} />
  </> :<></>}

        

          <Route element={<PrivateRoute role="User" />}>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/dashboard/getCar/:id" element={<GetCarPage />} />
          </Route>

          <Route element={<PrivateRoute role="Owner" />}>
            <Route path="/dashboard/owner" element={<OwnerDashboard />} />

            <Route
              path="/dashboard/owner/getCar/:id"
              element={<GetCarPage />}
            />
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
