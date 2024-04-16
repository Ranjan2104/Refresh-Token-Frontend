import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useApiLoginMutation } from "../store/middleware/loginAPI";
import Cookies from 'js-cookie';

const Login = () => {
  const [user, setUser] = useState({
    mobilenumber: 0,
    email: "",
  });
  const [apiLogin] = useApiLoginMutation();
  const nav = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await apiLogin({
        ...user,
      });
      if (response.data.status === 200) {
        toast.success("Successfully Logged in");
        Cookies.set('accessToken', response.data.data.accessToken);
        Cookies.set('refreshToken', response.data.data.refreshToken);
        nav("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        placeholder="Enter your Number"
        className="input-field"
        name="mobilenumber"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        placeholder="Enter your Email"
        className="input-field"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <div className="btn-position">
        <button className="btnLogin" onClick={handleLogin}>
          Login
        </button>
        <button className="btnLogin" onClick={() => nav("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
