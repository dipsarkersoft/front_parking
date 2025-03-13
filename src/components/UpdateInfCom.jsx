import React, { useEffect, useState } from "react";
import { useAuth } from "../contex/useAuth.jsx";
import { authenticated_user, updateUserInf } from "../api/allapi";
import toast from "react-hot-toast";
import { LoadingCom } from "./utils/LoadingCom.jsx";
import { LoadingComponent } from "./utils/LoadingComponent.jsx";
import imgdemo from "../assets/img/profile.png"
 

export const UpdateInfCom = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingComn, setLoadingComn] = useState(false);

  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");

  const UserInf = async () => {
    try {
      setLoadingComn(true);
      const { data } = await authenticated_user(user_id, token);

      if (data) {
        setEmail(data?.email);
        setMobileNo(data?.mobile_no);
        setLastName(data?.last_name);
        setFirstName(data?.first_name);

        setLoadingComn(false);
      }
    } catch (err) {
      setLoadingComn(false);
      toast.error("Something Wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        mobile_no: mobileNo,
        last_name: lastName,
        first_name: firstName,
        email: email,
      };
      setLoading(true)
      const data = await updateUserInf(token, body);

      if (data?.status == 201) {

        toast.success("Your Inf Update Success");
        localStorage.setItem("user", JSON.stringify(data.data));
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      toast.error("Something Wrong");
    }
  };



  const [image, setImage] = useState(null);

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  useEffect(() => {
    UserInf();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>

          {loadingComn ? (
            <>
              <LoadingComponent />
            </>
          ) : (
            <>
              



<form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    
                      <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div className="image-upload-container">
                          {/* Image Preview */}
                          <img
                              src={image || imgdemo}
                            alt="Profile"
                            className="rounded-circle"
                            style={{
                              width: "150px",
                              height: "150px",
                              objectFit: "cover",
                              border: "2px solid #ddd",
                            }}
                          />
                          {/* File Input */}
                          
                        </div>
                      </div>
                    

                    <div className="col-md-7">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input
                          type="text"
                          className="form-control"
                          value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                       
                        <input
                            type="file"
                            accept="image/*"
                              onChange={handleImageChange}
                            className="form-control mt-2"
                          />
                      </div>

                      <button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary"
                  >
                    {loading ? (
                      <>
                        Update
                        <span className="spinnerbtn"></span>
                      </>
                    ) : (
                      " Update"
                    )}
                  </button>
                    </div>

                    
                  </div>

                
                </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
