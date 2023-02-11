import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import john from "../assets/john.png";
import HomeData from "../components/HomeData";
import HomeSection from "../components/home_section/HomeSection";
import WorkInfo from "../components/work_info/WorkInfo";
import WorkData from "../components/WorkData";

const HomeInfo = HomeData.map((info) => {
  return (
    <HomeSection
      key={info.key}
      heading={info.heading}
      date={info.date}
      topic={info.topic}
      description={info.description}
    />
  );
});

const workInfo = WorkData.filter((data) => data.id < 4).map((data) => {
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

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__wrapper">
        <div className="homeTop__wrapper">
          <div className="left_section">
            <h1 className="heading__info-1">Hi, I am John,</h1>
            <h1 className="heading__info-2 ">Creative Technologist</h1>
            <p className="heading__description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="download__btn">Download Resume</button>
          </div>
          <div className="right_section">
            <img className="john_img" src={john} />
          </div>
        </div>

        <div className="blue-section__wrapper">
          <div className="blue-section-heading">
            <h3 className="recent-post">Recent posts</h3>
            <h3 className="view">View all</h3>
          </div>
          <div className="blue-section">{HomeInfo}</div>
        </div>
        <div className="third-section">
          <h3 className="featured-works">Featured works</h3>
          {workInfo}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
