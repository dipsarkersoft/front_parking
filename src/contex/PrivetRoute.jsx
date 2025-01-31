import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth.jsx";


const PrivateRoute = ({ role }) => {
    const { user,loading } = useAuth();
  
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
    if (!user  ) {
      
      return <Navigate to="/login" />;
    }
  
  
    if ( user.account_type !== role) {
      
      return <Navigate to="/login" />;
    }
    else{
      return <Outlet />;
    }
  
    
  };
export default PrivateRoute;
