import React from "react";
import { Link } from "react-router-dom";
import cardbg from "../assets/solo.jpg";

const Card = () => {
  return (
    <div>
      <div className="solo">
        <div class="card" style={{ width: "23rem", margin: "15px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 30/06/24</h3>
              <h3>Time: 06:00 pm</h3>
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
            <button className="btn btn-md btn-danger clll">
              <Link
                to={"/payment"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </div>
        </div>
        <div class="card" style={{ width: "23rem", margin: "10px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 30/06/24</h3>
              <h3>Time: 06:00 pm</h3>
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
              <b>Booyah : </b>
              <span>&#8377;</span> 100+kills
            </li>
          </ul>
          <div class="card-body">
            <button className="btn btn-md btn-danger clll">
              <Link
                to={"/payment"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </div>
        </div>
        <div class="card" style={{ width: "23rem", margin: "10px" }}>
          <img class="card-img-top" src={cardbg} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Tournament</h5>
            <p class="card-text">
              <h3>Map: Bermuda</h3>
              <h3>date: 30/06/24</h3>
              <h3>Time: 06:00 pm</h3>
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
            <button className="btn btn-md btn-danger clll">
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
      <div className="container main">
        <div className="row wrap container">
          <div className="col-sm  box card">
            <div className="row c">
              <div className="col cll">
                <h4 className="p  text-right" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Date: 30/06/24
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time: 06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cllli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>20
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm  box card">
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Date: 30/06/24
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time: 06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cllli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>120
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm  box card">
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Date: 30/06/24
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time: 06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cllli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>120
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="container main">
        <div className="row wrap container">
          <div className="col-sm  box card">
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h4 className="p" style={{ fontWeight: "800" }}>
                  Date:30/06/24
                </h4>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cllli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>120
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-2  box card1">
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Date:30/06/24
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>120
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-2  box card2">
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Date:30/06/24
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Type: Squad
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:00 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger cli">
                  <Link
                    to={"/payment"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register <span>&#8377;</span>120
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
