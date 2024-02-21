import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../../helpers";

const initialUser = { password: "", identifier: "" };

const Loginform = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      console.error('Error:', error) 
    }
  };

        return (
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
            placeholder="Email Address" 
            type="email"
            name="identifier"
            value={user.identifier}
            onChange={handleChange}
        />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange} />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleLogin}>Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Dont have an account? <a className="text-red-600 hover:underline hover:underline-offset-4"><Link to="/Register">Register</Link></a>
        </div>
      </div>
    </section>
        )
}

export default Loginform