import React from "react";
import "./WorkInfo.css";
import { Link } from "react-router-dom";

const WorkInfo = (props) => {
  return (
    <div className="work_info">
      <div className="work_info-image">
        <Link to="/work">
          <img classname="image" src={props.img} alt="" />
        </Link>
      </div>
      <div className="headingContents">
        <h1 className="heading">{props.heading}</h1>
        <div className="work_year-topic">
          <h2 className="year">{props.year}</h2>
          <h2 className="topic">{props.topic}</h2>
        </div>
        <h3 className="work_description">{props.description}</h3>
        <div className="horizontal"></div>
      </div>
    </div>
  );
};

export default WorkInfo;
