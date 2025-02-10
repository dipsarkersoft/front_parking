import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contex/useAuth.jsx";

export const Navbar = () => {
  const { user, logout,isAuth } = useAuth();
  const { account_type } = user;
  const navigate=useNavigate()

  const handleLogout = async () => {
    logout();
    localStorage.clear();
    navigate("/login");
  };

  
  return (
    <div className="container-fluid BGC shadow-sm">
      <nav className="container navbar navbar-expand-lg  text-white  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            PARKING
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-1">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                ></Link>
              </li>

              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/service"} className="nav-link">
                Service
                </Link>
              </li>

              

              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>

              {isAuth ? (
                <>
                  <li className="nav-item">
                    {account_type == "Owner" ? (
                      <>
                        <Link to={"/dashboard/owner/"} className="nav-link">
                          Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to={"/dashboard/"} className="nav-link">
                          Dashboard
                        </Link>
                      </>
                    )}
                  </li>

                  <div className="btn-group">
                    <button
                      className="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </button>
                    <ul className="dropdown-menu  dpdown ">
                      <li>
                        <Link className="nav-link" to={"/profile"}>
                          My Profile
                        </Link>
                      </li>

                      <li>
                        <Link
                          to={"/logout"}
                          onClick={handleLogout}
                          className="nav-link"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>



    </div>
  );
};



