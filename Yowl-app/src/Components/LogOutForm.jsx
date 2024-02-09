import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    localStorage.removeItem('user');
    setIsLoggedOut(true);
  }, []);
 
  useEffect(() => {
    if (isLoggedOut) {
      navigate("/");
    }
  }, [isLoggedOut, navigate]);
 
  return null;
};
 
export default Logout;