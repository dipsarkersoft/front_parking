import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contex/useAuth.jsx";
import { LoadingCom } from "../components/utils/LoadingCom.jsx";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser, role, getAuthUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const handleuser = async () => {
    setUsername("buyer");
    setPassword("12345ddd");
  };

  const handleOwner = async () => {
    setUsername("demo1");
    setPassword("12345ddd");
  };

 
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username) {
      toast.error("Username Needed");
      return;
    }
    if (!password) {
      toast.error("Password Needed");
      return;
    }

    setLoading(true);

    try {
      
      const res = await loginUser(username, password);

      if (res) {
        const userData = await getAuthUser();
        if (userData) {
          
          setAuthUser(userData);
          toast.success("Login Success")
          
          
        } 
        else {
          toast.error("Failed to fetch user details.");
        }
      }
       else {
        toast.error("Invalid credentials");
      }
    } 
    catch (error) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    if(authUser){
    if (authUser?.account_type==="User") {
      navigate("/dashboard");
    } 
    else if (authUser?.account_type == "Owner") {
      navigate("/dashboard/Owner");
    }
  }
  }, [authUser, navigate]);






  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            {loading ? (
              <>
                <LoadingCom />
              </>
            ) : (
              <div className="card-body">
                <h3 className="text-center mb-4">Login</h3>
                <div className="d-flex gap-2">
                  <button className="btn btn-success" onClick={handleuser}>
                    User
                  </button>

                  <button className="btn btn-success" onClick={handleOwner}>
                    Owner
                  </button>
                </div>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="Enter Your Username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Login
                  </button>
                </form>
                <div className="text-center mt-3">
                  Don't have an account? <Link to={"/register"}> Sign up</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
