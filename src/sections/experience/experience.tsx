import React from 'react';
import { Row, Col } from "react-flexbox-grid";
import { MdWork } from 'react-icons/md';
import {IoMdSchool } from 'react-icons/io';
import Icon from '@mui/material/Icon';

import 'react-vertical-timeline-component/style.min.css';
import './experience.scss';
import '../../style/App.scss';
import Title from '../../components/title/title';
import ExperienceCard from '../../components/experienceCard/experienceCard';
import Skill from '../../components/skill/skill'

export default function Experience() {
  return (
    <div className='experience section-wrapper'>
      <div className='wrapper'>
        <Row>
          <Col md={12} lg={6}>
            <Title title='SKILLS & EXPERIENCE.' />
            <div className='experience-skills'>
              <Row className=''>
                <Col md={1} lg={1} style={{minWidth:"20px"}} >
                  <hr />
                </Col>
                <Col md={10} lg={10} style={{width:"auto"}}>
                  <p>
                  {/* Interested in the ideas that fall at the intersection of artificial intelligence and robotics. <br/>
                  Inspired to solve meaningful and challenging real-world problems using technology! Eager to work hard and learn continuously. */}
                  </p>
                </Col>
              </Row>

              <h2 className="weight800 font30 padding20">
                Skills
              </h2>
              
              <div className="skills">
                <div className="skillsGrid">
                <Skill source="https://icongr.am/devicon/python-original-wordmark.svg?size=128&color=currentColor" alt="The logo icon for react" title="React"/>
                <Skill source="https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://icongr.am/devicon/c-original.svg?size=128&color=currentColor" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://icongr.am/devicon/java-original-wordmark.svg?size=128&color=currentColor" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://icongr.am/devicon/amazonwebservices-original-wordmark.svg?size=128&color=currentColor" alt="The logo icon for NodeJS" title="Node JS"/>
                </div>   
                <div className="skillsGrid">
                <Skill source="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                </div>            
              </div>
            </div>
          </Col>

          <Col md={12} lg={6}>
            <div className='experience-experience'>
              <h2 className="weight800 font30">
                Experience
              </h2>

              <ExperienceCard 
                date='Fall 2022'
                jobTitle='Incoming Software Engineer Intern'
                companyName='Tesla'
              ></ExperienceCard>
              
              <ExperienceCard 
                date='Mar 2021 - Sep 2021'
                jobTitle='Machine Learning Engineer Co-op'
                companyName='Collaborative Asset Platform LLC'
              ></ExperienceCard>

              <ExperienceCard 
                date='Sep 2019 - Mar 2020'
                jobTitle='Software Engineer Co-op - Process Team'
                companyName='Kulicke & Soffa'
              ></ExperienceCard>

            </div>
          </Col>
        </Row>
        
      </div>
    </div>
  )
}

// export default function Experience() {
//   return (
//     <div className='experience'>
//       <div className='wrapper'>
//         <Title title='EXPERIENCE.' />
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: '#fbdb6b', color: '#000'}}
//             contentArrowStyle={{ borderRight: '7px solid  #fbdb6b' }}
//             date="Mar 2021 - Sep 2021"
//             iconStyle={{ background: '#fbdb6b', color: '#000' }}
//             icon={<MdWork />}
//           >
//             <h3 className="vertical-timeline-element-title">Machine Learning Engineer Co-op </h3>
//             <h3 className="vertical-timeline-element-title">Collaborative Asset Platform LLC</h3>
//             <h4 className="vertical-timeline-element-subtitle">Santa Clara, California, United States (remote)</h4>
//             <p className='weight500 font12'>
//             • Research different state-of-art NLP models (i.e. Stanford CoreNLP, BERT, FinBERT, RoBERTa) for sentiment analysis on 200+ pages finance reports from 100+ companies <br/>
//             • Led development of infrastructure to support training and deploying machine learning model, reducing training time by 70% (Python, TensorFlow 2, AWS S3/SageMaker)
//             </p>
//           </VerticalTimelineElement>

//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: '#fbdb6b', color: '#000' }}
//             contentArrowStyle={{ borderRight: '7px solid  #fbdb6b' }}
//             date="Sep 2019 - Mar 2020"
//             iconStyle={{ background: '#fbdb6b', color: '#000' }}
//             icon={<MdWork />}
//           >
//             <h3 className="vertical-timeline-element-title">Software Engineer Co-op - Process Team</h3>
//             <h3 className="vertical-timeline-element-title">Kulicke & Soffa</h3>
//             <h4 className="vertical-timeline-element-subtitle">Fort Washington, Pennsylvania</h4>
//             <p>
//             • Developed and tested Python big data pipeline, improving analysis of 8,000+ rows CSV and Excel dataset from robotic sensors by 75%<br/>
//             • Initiated and built full-stack web app to automate evaluation of robotic system performance used in 2 research centers in less than 3 months (Pandas, Matplotlib, Javascript, Django, Bootstrap, Bokeh, HoloViews)
//             </p>
//           </VerticalTimelineElement>
          
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             date="April 2013"
//             iconStyle={{ background: '#000', color: '#fff' }}
//             contentStyle={{ background: '#000', color: '#fff' }}
//             icon={<IoMdSchool />}
//           >
//             <h3 className="vertical-timeline-element-title">Drexel University</h3>
//             <h4 className="vertical-timeline-element-subtitle">Bachelor of Science - BS,</h4>
//             <p>
//               2018 - 2023
//             </p>

//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </div>
//     </div>
//   )
// }
