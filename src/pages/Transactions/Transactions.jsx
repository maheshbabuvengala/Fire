import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Transactions.css";
import Navbar from "../Navbar/Navbar";

const Transactions = () => {
  const [items, setItems] = useState([]);
  const [squad,setSquad] =useState([]);

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

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://firescrimbackend.onrender.com/squad",
          { withCredentials: true }
        );
        if (response.data && response.data.length > 0) {
          setSquad(response.data);
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
      <h3 style={{textAlign:"center",color:"white",marginTop:"10px"}}>Solo Transactions</h3>
      <div className="ttable" style={{marginTop:"20px"}}>
        <table className="tata">
          <tr className="tata">
            <td style={{ color: "orange" }} className="tata">
              username
            </td>
            <td style={{ color: "orange" }} className="tata">
              Name
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
              <td colSpan="4">No Transcations found</td>
            </tr>
          )}
        </table>
      </div>
      <h3 style={{textAlign:"center",color:"white",marginTop:"20px"}}>Squad Transactions</h3>
      <div className="ttable">
        <table className="tata">
          <tr className="tata">
            <td style={{ color: "orange" }} className="tata">
              username
            </td>
            <td style={{ color: "orange" }} className="tata">
              Name
            </td>
            <td style={{ color: "orange" }} className="tata">
              upiId
            </td>
            <td style={{ color: "orange" }} className="tata">
              status
            </td>
          </tr>
          {squad.length > 0 ? (
            squad.map((item, index) => (
              <tr key={index} className="tata">
                <td className="tata">{item.username}</td>
                <td className="tata">{item.freefireid}</td>
                <td className="tata">{item.upiid}</td>
                <td className="tata">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr className="tata">
              <td colSpan="4">No Transcations found</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default Transactions;
