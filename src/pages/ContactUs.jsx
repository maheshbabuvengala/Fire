import React from "react";
import Navbar from "./Navbar/Navbar";

const ContactUS = () => {
  // body {
  //     width: 100%;
  // }

  // .container {
  //     margin: auto;
  //     width: 80%;
  // }

  // p {
  //     line-height: 8px;
  // }

  // h4 {
  //     line-height: 20px;
  // }

  // h5 {
  //     margin-top: 10px;
  // }
  return (
    <div>
      <Navbar />
      <div class="container" style={{ marginTop: "100px" }}>
        <h1>Contact Us</h1>
        <h5>Last updated on 19-03-2024 16:12:40</h5>
        <h4>You may contact us using the information below:</h4>
        <p>Merchant Legal entity name: FIRESCRIM CORDINATOR</p>
        <p>Telephone No: +919966843945</p>
        <p>E-Mail ID: firescrim58@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUS;
