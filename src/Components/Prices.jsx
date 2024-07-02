import React from "react";
import ba1 from "../assets/1st badge.png";
import ba2 from "../assets/2nd badge.png";
import ba3 from "../assets/3rd badge.png";
import Price from "./Price";

const Prices = () => {
  return (
    <div className="container">
      <div className="row container wrap">
        <div className="col-sm-4 price">
          <Price img={ba1} t1={"1"} t2={"st"} amount={480} />
        </div>
        <div className="col-sm-4 price">
          <Price img={ba2} t1={"2"} t2={"nd"} amount={280} />
        </div>
        <div className="col-sm-4 price">
          <Price img={ba3} t1={"3"} t2={"rd"} amount={160} />
        </div>
      </div>
    </div>
  );
};

export default Prices;
