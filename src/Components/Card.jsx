import React from "react";
import { Link } from "react-router-dom";
import cardbg from "../assets/solo.jpg";

const Card = () => {
  return (
    <div>
      <div className="solo">
        <div class="card car1" style={{ width: "23rem", margin: "15px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 21/07/24</h3>
              <h3>Time: 12:30 pm</h3>
              <h3>Type: Solo</h3>
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Entry Fee:</b> <span>&#8377;</span> 20
            </li>
            <li class="list-group-item">
              <b>Price: 1 kill =</b> <span>&#8377;</span> 10
            </li>
            <li class="list-group-item">
              <b>Booyah :</b> <span>&#8377;</span> 100+kills
            </li>
          </ul>
          <div class="card-body">
            <button className="btn btn-md btn-danger clll" >
              <Link
                to={"/payment"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
            
          </div>
        </div>
        <div class="card car2" style={{ width: "23rem", margin: "15px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 21/07/24</h3>
              <h3>Time: 03:00 pm</h3>
              <h3>Type: Solo</h3>
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Entry Fee:</b> <span>&#8377;</span> 20
            </li>
            <li class="list-group-item">
              <b>Price: 1 kill =</b> <span>&#8377;</span> 10
            </li>
            <li class="list-group-item">
              <b>Booyah :</b> <span>&#8377;</span> 100+kills
            </li>
          </ul>
          <div class="card-body">
            <button className="btn btn-md btn-danger clll" >
              <Link
                to={"/payment"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
            
          </div>
        </div>
        <div class="card car3" style={{ width: "23rem", margin: "10px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 21/07/24</h3>
              <h3>Time: 07:30 pm</h3>
              <h3>Type: Solo</h3>
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Entry Fee</b>: <span>&#8377;</span> 20
            </li>
            <li class="list-group-item">
              <b>Price: 1 kill = </b>
              <span>&#8377;</span> 10
            </li>
            <li class="list-group-item">
              <b>Booyah : </b>
              <span>&#8377;</span> 100+kills
            </li>
          </ul>
          <div class="card-body">
            <button className="btn btn-md btn-danger clll" >
              <Link
                 to={"/payment"} 
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <div className="cardss car4">
          <div className="card-body">
            <p className="card-title h4" style={{ color: 'white' }}>Map: Bermuda</p>
            <p className="card-title h4" style={{ color: 'white' }}>Type : Squad</p>
            <p className="card-title h4" style={{ color: 'white' }}>Time : 12:30pm</p>
            <p className="card-title h4" style={{ color: 'white' }}>Date : 21/07/24</p>
            <p className="card-title h4" style={{ color: 'white' }}>Entry Fee: 120</p>
            <Link className="btn btn-primary" to="/paymentsquad">Register Now</Link> {/* Use to instead of href for react-router-dom */}
          </div>
        </div>
        <div className="cardss car5">
          <div className="card-body">
            <p className="card-title h4" style={{ color: 'white' }}>Map: Bermuda</p>
            <p className="card-title h4" style={{ color: 'white' }}>Type : Duo</p>
            <p className="card-title h4" style={{ color: 'white' }}>Time : 03:00pm</p>
            <p className="card-title h4" style={{ color: 'white' }}>Date : 06/07/24</p>
            <p className="card-title h4" style={{ color: 'white' }}>Entry Fee: 120</p>
            <Link className="btn btn-primary" to="/paymentsquad">Register Now</Link> {/* Use to instead of href for react-router-dom */}
          </div>
        </div>
        <div className="cardss car6">
          <div className="card-body">
            <p className="card-title h4" style={{ color: 'white' }}>Map: Bermuda</p>
            <p className="card-title h4" style={{ color: 'white' }}>Type : Duo</p>
            <p className="card-title h4" style={{ color: 'white' }}>Time : 07:30pm</p>
            <p className="card-title h4" style={{ color: 'white' }}>Date : 21/07/24</p>
            <p className="card-title h4" style={{ color: 'white' }}>Entry Fee: 120</p>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <Link  className="btn btn-primary" to="/paymentsquad">Register Now</Link> {/* Use to instead of href for react-router-dom */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
