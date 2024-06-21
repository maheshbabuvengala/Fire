import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [freefireid, setfreefireid] = useState();
  const [phoneno, setphoneno] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  let a = document.getElementById("error");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (phoneno.length !== 10) {
      a.textContent = "enter a valid ph number";
      setLoading(false);
    } else {
      axios
        .post("https://firescrimbackend.onrender.com/register", {
          name,
          username,
          password,
          freefireid,
          phoneno,
        })
        .then((result) => {
          setLoading(false);
          console.log(result);

          if (result.data == "user already exists") {
            a.textContent = "user already exists";
            // alert("user already exists")
          } else {
            alert("signup is successful");
            navigate("./login");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <h1>Signup</h1>
        <form action="" onSubmit={handleSubmit}>
          <p id="error" className="error"></p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="password"
              className="pass"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </span>
          </div>
          <input
            type="number"
            name=""
            id=""
            placeholder="Freefire-Id"
            onChange={(e) => setfreefireid(e.target.value)}
            required
          />
          <input
            type="number"
            name=""
            id="phoneno"
            placeholder="Phone no"
            onChange={(e) => setphoneno(e.target.value)}
            required
          />
          <div className="check">
            <input type="checkbox" name="" id="" required />
            <Link to="/terms">Accept terms&conditions</Link>
          </div>
          <span></span>
          <input
            type="submit"
            name=""
            id=""
            className="submitbutt"
            disabled={loading}
          />
        </form>
        {loading && <div className="loader"></div>}
        <div className="sec">
          <p>Already a member ?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
