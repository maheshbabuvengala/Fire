import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Scanner from "../../assets/scanner20.jpg";
import "./Payment.css";
import Paytm from "../../assets/paytm.jpg";
import phonepe from "../../assets/phonepe.jpg";
import googlepay from "../../assets/googlepay.jpg";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Duopayment = () => {
  const [free, setfree] = useState("");
  const [usernames, setUsernames] = useState("");

  const [upiid, setupiid] = useState();

  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const [freefire, setfreefire] = useState("");
  const [phonenos, setphonenos] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://firescrimbackend.onrender.com/api/items",
          { withCredentials: true }
        );
        setTransactions(response.data);
        setUser(response.data[0].username);
        setfreefire(response.data[0].name);
        setphonenos(response.data[0].phoneno);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Error fetching transactions. Please try again later.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const username = user;
  const freefireid = freefire;
  const status = "Pending";
  const phoneno = phonenos;

  const handleSubmit =(e) => {
    e.preventDefault();
    axios.post("https://firescrimbackend.onrender.com/duo",{username,freefireid,upiid,phoneno,status})
    .then(result => {console.log(result) 
      if(result.data == "The upiid already exists"){
        alert("The upiid already exists please check My Transactions page")
        // alert("user already exists")
      }
      else{
        alert("Registration success")
        navigate("/transactions")
      }
  })
  .catch(err => console.log(err))
  };

  return (
    <>
      <Navbar />
      <div className="conatiner">
        <br />
        <h1 style={{ textAlign: "center" }}>Payment Page</h1>
        <div className="container payment">
          <div className="left">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="utr">
                <h4 className="wel">UTR id/transaction id/ref.NO :</h4>
              </label>
              <div className="imgs">
                <img src={phonepe} />
                <img src={googlepay} />
                <img src={Paytm} />
              </div>
              <label htmlFor="" className="ins">
                UTR id/transaction id/ref.NO :
              </label>
              <input
                type="text"
                name="utr"
                id="utr"
                required
                className="input"
                placeholder="enter according to your payment app"
                onChange={(e) => setupiid(e.target.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "30px", marginLeft: "35%" }}
              >
                Submit
              </button>
            </form>
          </div>
          {/* <a href="upi://pay?pa=9381574024-2@okbizaxis&pn=Mr%20%20VELIVELA%20%20SATYAK&am=20&mc=5411&aid=uGICAgMCRy8baWQ&ver=01&mode=01&tr=BCR2DN4TVHQ6J5DC"><h4>Scan Or Click Here</h4></a> */}
          <div className="right">
            <img src={Scanner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Duopayment;
