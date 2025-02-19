import axios from "axios";
import { data } from "react-router-dom";

 export const URL = "https://backend-parking-p4dd.onrender.com/";
//  export const URL ="http://127.0.0.1:8000/"
// export const URL ="https://back-parking-ver.vercel.app/";


export const RegisterAPI = async (
  username,
  firstName,
  lastName,
  email,
  password,
  mobile
) => {
  try {
    const { data } = await axios.post(
      `${URL}register/`,
      {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        confirm_password: password,
        mobile_no: mobile,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return data;
  } catch (error) {
    return false;
  }
};



export const loginAPI = async (username, password) => {
    try {
      const { data } = await axios.post(`${URL}login/`, {
        username,
        password,
      });
  
      return data;
    } catch (error) {
      // console.error("Login failed:", error);
      return false;
    }
  };

  
export const authenticated_user = async (id, token) => {
    const { data } = await axios.get(`${URL}userID/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  };
  

  export const logoutAPI = async (token) => {
    // const {token} =useAuth()
    
    const { data } = await axios.get(`${URL}logout/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
   
    return data;
  };


  // category


  export const createCategory = async (token,body) => {
    try {
      // console.log(body)
      const { data } = await axios.post(
        `${URL}category/create/`,
  
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      // console.log(err);
    }
  };


  export const updateUserInf = async (token,body) => {
    try {
      // console.log(body)
      const { data } = await axios.put(
        `${URL}updateProfile/`,
  
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      // console.log(err);
    }
  };





  export const allCategoryAPI = async () => {
    const { data } = await axios.get(`${URL}category/all/`);
    return data;
  };


  export const getCategoryByid=async(id)=>{

    const { data } = await axios.get(`${URL}/category/${id}/`);
    return data;
  
  }



  export const allParkingView = async (token) => {
    const { data } = await axios.get(`${URL}parking/all/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  };




  export const createParking = async (token, body) => {
    try {
      // console.log(body)
      const { data } = await axios.post(
        `${URL}parking/create/`,
  
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      // console.log(err);
    }
  };





export const backVehicals = async (token, body,id) => {
    try {
      // console.log(body)
      const { data } = await axios.put(
        `${URL}parking/back/${id}`,
  
        body,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      // console.log(err);
    }

    console.log(data)
  };
  

  export const availableSlotAPI=async(token,catid,st,et)=>{

    try{
      const apiUrl = `${URL}parking/availableSlot/?category_id=${catid}&start_time=${st}&end_time=${et}`

      const {data}=await axios.get(apiUrl, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      })

      return data

      


    }

    catch(err){

    }

  }
  
  
  export const cheakTotalBill = async (token,body,id) => {
    const { data } = await axios.put(`${URL}parking/cheaktotal/${id}`,body, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  };




  export const paymentAPI=async(token,body)=>{

   
    const {data}=await axios.post(`${URL}parking/payment/`,body,
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    return data
  
  }