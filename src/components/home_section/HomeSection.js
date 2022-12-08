import React from "react";
import "./HomeSection.css";

const HomeSection = (props) => {
  return (
    <div className="blue-section__wrapper">
      <div className="white-section">
        <h2 className="section__heading">{props.heading}</h2>
        <div className="horizontal__wrapper">
          <h4 className="wrapper__date">{props.date}</h4>
          <div className="section__divider"></div>
          <h4 className="wrapper__topic">{props.topic}</h4>
        </div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default HomeSection;
