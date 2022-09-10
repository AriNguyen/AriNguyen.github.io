import { Row, Col } from "react-flexbox-grid";

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
      <Title title='EXPERIENCE.' />
        <Row>
          <Col md={12} lg={6}>
            <div className='experience-skills'>
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