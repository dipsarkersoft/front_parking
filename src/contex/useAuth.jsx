import React, { createContext, useContext, useState, useEffect } from "react";
import { authenticated_user, loginAPI, logoutAPI } from "../api/allapi.js";
import toast from "react-hot-toast";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [userid, setUserid] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);


 const loginUser = async (username, password) => {
    const data = await loginAPI(username, password);
    const { user_id, token,account_type }=data
    if (user_id && token && account_type) {
      setUserid(user_id);
      setToken(token);
      setRole(account_type);
      setIsAuth(true)
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("token", token);
      getAuthUser();

      toast.success("Login Sucess");
      return data

    } else {
      toast.error("Incorrect username or password");
    }
  };


const getAuthUser = async () => {
    const UserId = localStorage.getItem("user_id");
    const Token = localStorage.getItem("token");

    if (UserId && Token) {
      try {
        const { data } = await authenticated_user(UserId, Token);
        setUser(data);
        setUserid(UserId);
        setToken(Token);
        localStorage.setItem("user", JSON.stringify(data));
        return data
      } catch (error) {
        setUser(null);
        setUserid(null);
        setToken(null);
      }
    } else {
      setUser(null);
      setUserid(null);
      setToken(null);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsAuth(true)
      setUser(user);
      setRole(user.account_type);
    }
    setLoading(false);
  },[window.location.pathname]);



  const logout = async () => {
    
    logoutAPI(token);
    setUser({});
    setUserid(null);
    setToken(null);
    setRole(null);
    setIsAuth(false);
    localStorage.removeItem("user_id",);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
   

  };

  return (
    <AuthContext.Provider value={{token,isAuth, userid, user,role, logout, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);