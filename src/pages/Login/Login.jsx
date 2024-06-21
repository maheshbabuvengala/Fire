import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://firescrimbackend.onrender.com/login", {
        username,
        password,
      })
      .then((result) => {
        setLoading(false);
        if (result.data === "success") {
          navigate("/home");
        } else if (result.data === "no record exists") {
          setError("You are not registered");
        } else {
          setError("Invalid Password");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <div className="body">
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {error && (
            <p id="error" className="error">
              {error}
            </p>
          )}
          <input
            type="text"
            placeholder="User Id"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="submitbutt" disabled={loading} />
          {loading && <div className="loader"></div>}
        </form>
        {/* <div className="loader"></div> */}
        <div className="sec">
          <p>Not a member?</p>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
