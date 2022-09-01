import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import Masonry from "react-masonry-css";

import './projects.scss';

import Title from "../../components/title/title";
import ProjectBox from '../../components/projectBox/projectBox';
import BlogModal from "../../components/blogBox/blogModal";

import Arrow from "../../assets/projects/arrow.svg";
import Preview1 from "../../assets/projects/project1/preview.jpg";
import Preview2 from "../../assets/projects/project2/preview.jpg";
import Preview3 from "../../assets/projects/project3/preview.jpg";
import Preview4 from "../../assets/projects/project4/preview.jpg";
import Preview5 from "../../assets/projects/project5/preview.jpg";
import Preview6 from "../../assets/projects/project6/preview.png";
import Preview7 from "../../assets/projects/project7/preview.jpg";
import Preview8 from "../../assets/projects/project8/preview.jpg";

type project = {
  id: string,
  preview: string,
  title: string,
  tag: Array<string>,
  path: string
}

export default function Projects() {
  const [isProjectOnClick, setIsProjectOnClick] = useState(false);
  const [currentViewProject, setCurentViewProject] = useState<string | "">("");
  let projects = [
    {
      id: "1",
      preview: Preview1,
      title: "Eye Tracking and Speech Generating App",
      tag: ["robotics", "ai/ml"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/speakYourMind.md"
    },
    {
      id: "2",
      preview: Preview2,
      title: "Object Avoidance and Detection Device",
      tag: ["robotics", "ai/ml"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/objectAvoidance.md"
    },
    {
      id: "3",
      preview: Preview3,
      title: "Smart Car For Disabled People",
      tag: ["robotics"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/wheelChair.md"
    },
    {
      id: "4",
      preview: Preview4,
      title: "SmartFridge App",
      tag: ["webMobile"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/delisa.md"
    },
    {
      id: "5",
      preview: Preview5,
      title: "DeepSign Game",
      tag: ["ai/ml"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/deepSign.md"
    },
    {
      id: "6",
      preview: Preview6,
      title: "Todo List using Speech Recognition Web App",
      tag: ["webMobile"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/todoList.md"
    },
    {
      id: "",
      preview: Preview7,
      title: "AURA, Virtual Assistant for Visually Impaired People",
      tag: ["ai/ml", "robotics"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/aura.md"
    },
    {
      id: "",
      preview: Preview8,
      title: "CodeGrindr - Hackathon Team Forming App",
      tag: ["webMobile"],
      path: "https://raw.githubusercontent.com/AriNguyen/project_readme/master/codeGrindr.md"
    },
  ];

  const [filterResult, setFilterResult] = useState(projects);
  const [pickedFilter, setPickedFilter] = useState("all");
  const [isFilterMenuActive, setFilterMenuActive] = useState(false);
  const [pickedFilterDropdown, setPickedFilterDropdown] = useState("NEWEST");
  const projectsBreakpoints = {
    default: 3,
    900: 2,
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

  let closeModal = () => {
    setIsProjectOnClick(false);
  };

  let showSuccessModal = (project: project) => {
    setCurentViewProject(project.path);
    setIsProjectOnClick(true);
  };

  return (
    <div id="projects" className='section-wrapper'>
      {isProjectOnClick &&
        <BlogModal path={currentViewProject} closeModal={closeModal} onKeyDown={closeModal} />
      }
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
              </div>)}
            </div>
          </Col>
        </Row>
        <Masonry breakpointCols={projectsBreakpoints} className="my-masonry-grid" columnClassName="gallery">
          {filterResult.map((project) => (
            <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} onClick={() => showSuccessModal(project)}/>
          ))}
        </Masonry>
      </div>
    </div>
  )
}
