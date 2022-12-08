import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./WorkDetail.css";
import dashboard from "../assets/dashboard.png";
import redCar from "../assets/redCar.png";
import order from "../assets/order.png";

function WorkDetail() {
  return (
    <div className="workDetail">
      <Navbar />
      <div className="workDetail__wrapper">
        <h1 className="heading__workDetail">
          Designing Dashboards with usability in mind
        </h1>
        <div className="headingDetails">
          <h2 className="heading_date">2020</h2>
          <h2 className="heading_title">Dashboard, User Experience Design</h2>
        </div>
        <p className="heading_description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img className="dashboard-img" src={dashboard} />
        <h1 className="heading1">Heading 1</h1>
        <h2 className="heading2">Heading 2</h2>
        <p className="heading_description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img className="car" src={redCar} />
        <img className="order" src={order} />
      </div>
      <Footer />
    </div>
  );
}

export default WorkDetail;
