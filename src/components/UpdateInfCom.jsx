import React, { useEffect, useState } from 'react'
import { useAuth } from '../contex/useAuth.jsx';
import { authenticated_user, updateUserInf } from '../api/allapi';
import toast from 'react-hot-toast';

export const UpdateInfCom = () => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
  

    const token=localStorage.getItem('token')
    const user_id=localStorage.getItem('user_id')
    

    const UserInf=async()=>{
        try{

            const {data}= await authenticated_user(user_id,token)
        
            setEmail(data.email)
        setMobileNo(data.mobile_no)
        setLastName(data.last_name)
        setFirstName(data.first_name)
        }
        catch(err){
            toast.error("Something Wrong")
        }
    

    }
  
    const handleSubmit =async (e) => {
      e.preventDefault();

      try{

      const body={
        "mobile_no":mobileNo,
        "last_name":lastName,
        "first_name":firstName,
        "email":email
      }

      const data=await updateUserInf(token,body)
      
      if (data.status==201){
        toast.success("Your Inf Update Success")
        localStorage.setItem("user", JSON.stringify(data.data))
      }
      

    }


      catch(err){
        toast.error("Something Wrong")
      }

    };


    useEffect(()=>{
        UserInf()
    },[])
  
    return (
      <div className="container mt-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">User Information</h5>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">

                <label className="form-label">Email</label>
                <input type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

              </div>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text"

                 className="form-control"
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                   />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" 
                className="form-control"
                 value={lastName} 
                 onChange={(e) => setLastName(e.target.value)} />

              </div>
              <div className="mb-3">
                <label className="form-label">Mobile No</label>
                <input type="text"
                className="form-control"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)} />

              </div>

              <button type="submit" className="btn btn-primary">Update</button>

            </form>


          </div>
        </div>
      </div>
    );
}

