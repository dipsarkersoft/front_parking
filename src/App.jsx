import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { ContactPage } from "./pages/Contact.jsx";
import { UpdateInfCom } from "./components/UpdateInfCom.jsx";
import { LoadingCom } from "./components/utils/LoadingCom.jsx";
import { LoadingComponent } from "./components/utils/LoadingComponent.jsx";
import { Loadingd } from "./components/utils/Loadingd.jsx";
import { GalaryPage } from "./components/GalaryPage.jsx";
import { Loadingprac } from "./pages/Loadingprac.jsx";

function App() {
  const { user } = useAuth();
  const token=localStorage.getItem("token")

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />

        <Routes>
          {user && token && user?.account_type ? (
            <>
             <Route path="/profile" element={<UpdateInfCom />} />
              <Route path="/logout" element={<Navigate to="/login" />} />
             
              <Route path="payment/sucess/:id/" element={<PaymentSucess />} />

              <Route path="payment/failed" element={<PaymentFailed />}/>

              {user?.account_type === "Owner" ? (
                <>
                  <Route
                    path="/register"
                    element={<Navigate to="/dashboard/Owner" />}
                  />
                  <Route
                    path="/login"
                    element={<Navigate to="/dashboard/Owner" />}
                  />
                </>
              ) : (
                <>
                  <Route
                    path="/register"
                    element={<Navigate to="/dashboard" />}
                  />
                  <Route path="/login" element={<Navigate to="/dashboard" />} />
                </>
              )}
            </>
          ) : (
            <>
            </>
          )}

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

          <Route path="/service" element={<ServicePage />} />
          <Route path="/galary" element={<GalaryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          

          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<Loadingprac />} /> */}

          {/* <Route path="/" element={<LoadingComponent />} /> */}
          {/* <Route path="/" element={<Loadingd />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
