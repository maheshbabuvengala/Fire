import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="container main">
        <div className="row wrap container">
          <div className="col-sm-2  box card">
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Map: Bermuda
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Date:23/06/24
                </h3>
              </div>
            </div>

            <div className="row c">
              <div className="col cll">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:10 PM
                </h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
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
                  Date:23/06/24
                </h3>
              </div>
            </div>

            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:10 PM
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
                    Register
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
                  Date:23/06/24
                </h3>
              </div>
            </div>

            <div className="row c">
              <div className="col cl">
                <h3 className="p" style={{ fontWeight: "800" }}>
                  Time:06:10 PM
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
                    Register
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
