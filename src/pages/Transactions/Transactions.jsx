import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Transactions.css";
import Navbar from "../Navbar/Navbar";

const Transactions = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://firescrimbackend.onrender.com/items",
          { withCredentials: true }
        );
        if (response.data && response.data.length > 0) {
          setItems(response.data);
        } else {
          setError("No transactions found.");
        }
        setLoading(false);
      } catch (error) {
        //console.error("Error fetching transactions:", error);
        setError("Error fetching transactions. Please try again later.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="head">
        <h1 style={{ color: "white" }}>Your Transactions</h1>
      </div>
      {/* <Link to="/login">Login page</Link> */}
      <div className="ttable">
        <table className="tata">
          <tr className="tata">
            <td style={{ color: "orange" }} className="tata">
              username
            </td>
            <td style={{ color: "orange" }} className="tata">
              freefireid
            </td>
            <td style={{ color: "orange" }} className="tata">
              upiId
            </td>
            <td style={{ color: "orange" }} className="tata">
              status
            </td>
          </tr>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={index} className="tata">
                <td className="tata">{item.username}</td>
                <td className="tata">{item.freefireid}</td>
                <td className="tata">{item.upiid}</td>
                <td className="tata">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr className="tata">
              {/* <td className='tata'>satyakarthik</td>
          <td className='tata'>655498522</td>
          <td className='tata'>5452236565</td>
          <td className='tata'>Success</td> */}
              <td colSpan="4">no results.</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default Transactions;
