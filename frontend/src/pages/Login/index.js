import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { requestLogin } from "../../utils/FetchApi";

const Login = () => {
  const [stateUsername, setStateUsername] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const navigate = useNavigate();

  function handleChange(event, setState) {
    setState(event.currentTarget.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const token = await requestLogin(stateUsername, statePassword);

      localStorage.setItem("token", token);
      localStorage.setItem("user", stateUsername);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇️ error: AxiosError<any, any>
        alert(error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>LOGIN</h1>
        <form>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            value={stateUsername}
            onChange={(event) => handleChange(event, setStateUsername)}
            className="form-control"
            id="username"
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={statePassword}
            onChange={(event) => handleChange(event, setStatePassword)}
            className="form-control"
            id="password"
          />
          <div className="login-buttons">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-dark"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
