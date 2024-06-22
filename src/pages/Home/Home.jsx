import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import Card from "../../Components/Card";
import Banner from "../../Components/Banner";
import Prices from "../../Components/Prices";
import Navbar from "../Navbar/Navbar";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import Cookies from "js-cookie";
import axios from "axios";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://firescrimbackend.onrender.com/api/items",
          { withCredentials: true }
        );
        if (response.data && response.data.length > 0) {
          setItems(response.data);
          setUsername(response.data[0].username);
        } else {
          setError("No transactions found.");
        }
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching transactions:", error);
        setError("Error fetching transactions. Please try again later.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="content">
      <Navbar />
      <h1 style={{ color: "#50E3C2", fontWeight: "800" }}>
        <br />
        Welcome: {username}
        <span>&#128591;</span>
      </h1>
      <Banner />

      <div className="container my-4">
        <h1>
          <span className="text-success">REGISTER </span>
          <span className="text-danger">NOW </span>
          <span>&#127881;</span>
        </h1>
        <p className="li"></p>
      </div>

      <Card />

      <div className="container my-4">
        <h1>
          <span className="text-danger">PRICES </span>
          <span className="text-success">LIST </span>
          <span>&#128181;</span>
        </h1>
        <p className="li"></p>
      </div>

      <Prices />

      <div className="container-fluid my-4">
        <h1>
          <span className="text-warning">IMP </span>
          <span className="text-success">LINKS</span>
        </h1>
        <p className="li"></p>

        <div className="row wrap">
          <div className="col-sm-4">
            <h5>
              Instagram <FaSquareInstagram />
            </h5>
          </div>
          <div className="col-sm-4">
            <h5>
              Telegram <BsTelegram />
            </h5>
          </div>
          <div className="col-sm-4">
            <h5>
              <a
                href={"https://whatsapp.com/channel/0029VadqqHdBqbr1miXpm43e"}
                className="whatsapp"
              >
                Whatsapp <IoLogoWhatsapp />
              </a>
            </h5>
          </div>
          <div className="col-sm-4">
            <Link className="link" to="/contactus">
              Contact Us
            </Link>
          </div>
          <div className="col-sm-4">
            <Link className="link" to="/termsandconditions">
              Terms & Conditions
            </Link>
          </div>
          <div className="col-sm-4">
            <Link className="link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
