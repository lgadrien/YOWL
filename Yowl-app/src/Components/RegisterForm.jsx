import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialUser = { email: "", password: "", username: "" };
const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      console.error('Error:', error) 
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
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
            type="text"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder="Enter your full name"
        />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            placeholder="Enter your email" 
          />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
            type="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
            placeholder="Enter password"
          />
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={signUp}>Register</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          You have an account? <a className="text-red-600 hover:underline hover:underline-offset-4"><Link to="/Login">Login</Link></a>
        </div>
      </div>
    </section>
        )
}

export default Registration