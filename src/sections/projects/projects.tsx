import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Masonry from "react-masonry-css";

import './projects.scss';

import Title from "../../components/title/title";
import ProjectBox from '../../components/projectBox/projectBox';

import Arrow from "../../assets/projects/arrow.svg";
import Preview1 from "../../assets/projects/project1/preview.jpg";
import Preview2 from "../../assets/projects/project2/preview.jpg";
import Preview3 from "../../assets/projects/project3/preview.jpg";
import Preview4 from "../../assets/projects/project4/preview.jpg";
import Preview5 from "../../assets/projects/project5/preview.png";
import Preview6 from "../../assets/projects/project6/preview.png";

export default function Projects() {
  let projects = [
    {
      id: "1",
      preview: Preview1,
      title: "Eye Tracking and Speech Generating App",
      tag: ["robotics", "ai/ml"],
    },
    {
      id: "2",
      preview: Preview2,
      title: "Object Avoidance and Detection Device",
      tag: ["robotics", "ai/ml"],
    },
    {
      id: "3",
      preview: Preview3,
      title: "Smart Car For Disabled People",
      tag: ["robotics"],
    },
    {
      id: "4",
      preview: Preview4,
      title: "SmartFridge App",
      tag: ["webMobile"],
    },
    {
      id: "5",
      preview: Preview5,
      title: "",
      tag: ["robotics"],
    },
    {
      id: "6",
      preview: Preview6,
      title: "Todo List Speech Recognition Web App",
      tag: ["webMobile"],
    },
  ];

  const [filterResult, setFilterResult] = useState(projects);
  const [pickedFilter, setPickedFilter] = useState("all");
  const [isFilterMenuActive, setFilterMenuActive] = useState(false);
  const [pickedFilterDropdown, setPickedFilterDropdown] = useState("NEWEST");
  const projectsBreakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    let projectsArr = [...projects];
    let result;

    if (pickedFilter !== "all") {
      result = projectsArr.filter((project) => project.tag.includes(pickedFilter));
    } else {
      result = projectsArr;
    }

    if (pickedFilterDropdown === "NEWEST")
      result = result.sort((a, b) => (a.id > b.id ? 1 : -1));
    else
      result = result.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    setFilterResult(result);
  }, [pickedFilter, pickedFilterDropdown]);

  return (
    <div id="projects">
      <div className="wrapper">
        <Title title="PROJECTS SHOWCASE." />
        <Row>
          <Col xs={12} sm={12} md={8} lg={9}>
            <div className="projects__nav">
              <ul>
                <li className={pickedFilter === "all" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("all")}>
                  ALL
                </li>
                <li
                  className={pickedFilter === "robotics" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("robotics")}
                >
                  ROBOTICS
                </li>
                <li
                  className={pickedFilter === "ai/ml" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("ai/ml")}
                >
                  AI/ML
                </li>
                <li className={pickedFilter === "webMobile" ? "projects__nav-active font12" : "font12"}
                  onClick={() => setPickedFilter("webMobile")}>
                  WEB & MOBILE APP
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3}>
            <div className="projects__filter" onMouseEnter={() => setFilterMenuActive(true)} onMouseLeave={() => setFilterMenuActive(false)}>
              <p className="font12">{pickedFilterDropdown} FIRST</p>
              <img src={Arrow} alt="arrow" />
              {isFilterMenuActive && (<div className="portfolio__filter-menu shadow">
                <p className="font12" onClick={() => setPickedFilterDropdown("NEWEST")}>
                  NEWEST
                </p>
                <p className="font12" onClick={() => setPickedFilterDropdown("OLDEST")}>
                  OLDEST
                </p>
              </div> )}
            </div>
          </Col>
        </Row>
        <Masonry breakpointCols={projectsBreakpoints} className="my-masonry-grid" columnClassName="gallery">
          {filterResult.map((project) => (
            <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}
