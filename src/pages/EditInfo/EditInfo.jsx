import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditInfo = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [freefireId, setFreefireId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");
  const [editName, setEditName] = useState("");
  const [editFreefireId, setEditFreefireId] = useState("");
  const [editPhoneNo, setEditPhoneNo] = useState("");
  const [loading, setLoading] = useState(true);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://firescrimbackend.onrender.com/api/items",
          {
            withCredentials: true,
          }
        );

        if (response.data && response.data.length > 0) {
          const userData = response.data[0];
          setName(userData.name);
          setUsername(userData.username);
          setPassword(userData.password);
          setFreefireId(userData.freefireid);
          setPhoneNo(userData.phoneno);
        } else {
          setError("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const enableEditing = () => {
    setDisable(false);
    setEditName(name);
    setEditFreefireId(freefireId);
    setEditPhoneNo(phoneNo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://firescrimbackend.onrender.com/profile/${username}`,
        {
          name: editName,
          freefireid: editFreefireId,
          phoneno: editPhoneNo,
        }
      );

      console.log(response.data);
      alert("Data updated successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Error updating user data.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <Navbar />
      <form onSubmit={handleSubmit} className="Form">
        <label className="labe">Freefire Name</label>
        <input
          type="text"
          value={disable ? name : editName}
          onChange={(e) => setEditName(e.target.value)}
          disabled={disable}
          className="inps"
        />
        <label className="labe">Username</label>
        <input type="text" value={username} disabled className="inps" />
        <label className="labe">Password</label>
        <input type="text" value={password} disabled className="inps" />
        <label className="labe">Freefire ID</label>
        <input
          type="text"
          value={disable ? freefireId : editFreefireId}
          onChange={(e) => setEditFreefireId(e.target.value)}
          disabled={disable}
          className="inps"
        />
        <label className="labe">Phone Number</label>
        <input
          type="text"
          value={disable ? phoneNo : editPhoneNo}
          onChange={(e) => setEditPhoneNo(e.target.value)}
          disabled={disable}
          className="inps"
        />
        <input
          type="submit"
          value="Save"
          disabled={disable}
          className="inpss"
        />
      </form>
      <div className="butts">
        <button onClick={enableEditing} disabled={!disable} className="edit">
          Edit <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default EditInfo;
