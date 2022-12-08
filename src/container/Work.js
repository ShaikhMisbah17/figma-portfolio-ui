import React from "react";
import "./Work.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WorkInfo from "../components/work_info/WorkInfo";
import WorkData from "../components/WorkData";

const WorkDataInfo = WorkData.map((data) => {
  return (
    <WorkInfo
      key={data.key}
      img={data.img}
      heading={data.heading}
      year={data.year}
      topic={data.topic}
      description={data.description}
    />
  );
});

function Work() {
  return (
    <div className="work">
      <Navbar />
      <div className="work__wrapper">
        <h1 className="heading__work">Work</h1>
        {WorkDataInfo}
      </div>
      <Footer />
    </div>
  );
}

export default Work;
