import React, { useState } from "react";
import {  Link } from "react-router-dom";
import toast from 'react-hot-toast'
import { useNavigate  } from "react-router-dom";
import { RegisterAPI } from "../api/allapi.js";




export const RegisterPage = () => {


    const navigate=useNavigate();
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleRegister = async (e) => {

      e.preventDefault();
  
      if(!username || !firstName || !lastName || !email || !password || !mobile){
        toast.error('All Credintial Is Required')
        return 
      }
      else if (password != confirmPassword){
        toast.error('Password And ConfirmPassword Must Be Same')
        return
      }
      else{
       const data=await RegisterAPI(username,firstName,lastName, email, password,mobile);
       
       
       if(data.status==201){
        toast.success(data.message)
       
       if (data){
        navigate('/login')
       }
  
      }
      else{
        toast.error("Something Wrong")
      
      }
    }
    
  
  
     
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="text-center mb-4">Register</h3>
                <form>
  
  
                <div className="mb-3">
                    <label className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="Enter a Username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
  
                  <div className="mb-3 d-flex gap-2 ">
  
                    <div>
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        placeholder="Enter Last name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                      />
                    </div>
  
                    <div>
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Last name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
  
                      />
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="Enter your Number"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Create a password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label  className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Re-enter your password"
                      requiredvalue={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button onClick={handleRegister} type="submit" className="btn btn-primary w-100">
                    Register
                  </button>
                </form>
                <div className="text-center mt-3">
                  
                    Already have an account? <Link  to={'/login'}>Login</Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };