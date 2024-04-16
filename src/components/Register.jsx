import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useApiRegisterMutation } from "../store/middleware/registerAPI";

const Register = () => {
  const nav = useNavigate();
  const [apiRegister] = useApiRegisterMutation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobilenumber: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: name === "mobilenumber" ? parseInt(value) : value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await apiRegister({
        ...user,
      });
      if (response.data.status === 201) {
        toast.success("Successfully Registered");
        nav("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="login">
        <h1>Register</h1>
        <input
          placeholder="Enter your Name"
          className="input-field"
          name="name"
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
        <input
          placeholder="Enter your Number"
          className="input-field"
          name="mobilenumber"
          onChange={handleChange}
        />
        <br />
        <br />
        <div className="btn-position">
          <button className="btnLogin" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
