import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from 'react-icons/md';
import {IoMdSchool } from 'react-icons/io';

import 'react-vertical-timeline-component/style.min.css';
import './experience.scss';
import '../../style/App.scss';
import Title from '../../components/title/title';

export default function Experience() {
  return (
    <div className='experience'>
      <div className='wrapper'>
        <Title title='EXPERIENCE.' />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fbdb6b', color: '#000'}}
            contentArrowStyle={{ borderRight: '7px solid  #fbdb6b' }}
            date="Mar 2021 - Sep 2021"
            iconStyle={{ background: '#fbdb6b', color: '#000' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer Co-op </h3>
            <h3 className="vertical-timeline-element-title">Collaborative Asset Platform LLC</h3>
            <h4 className="vertical-timeline-element-subtitle">Santa Clara, California, United States (remote)</h4>
            <p className='weight500 font12'>
            • Research different state-of-art NLP models (i.e. Stanford CoreNLP, BERT, FinBERT, RoBERTa) for sentiment analysis on 200+ pages finance reports from 100+ companies <br/>
            • Led development of infrastructure to support training and deploying machine learning model, reducing training time by 70% (Python, TensorFlow 2, AWS S3/SageMaker)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fbdb6b', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #fbdb6b' }}
            date="Sep 2019 - Mar 2020"
            iconStyle={{ background: '#fbdb6b', color: '#000' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Co-op - Process Team</h3>
            <h3 className="vertical-timeline-element-title">Kulicke & Soffa</h3>
            <h4 className="vertical-timeline-element-subtitle">Fort Washington, Pennsylvania</h4>
            <p>
            • Developed and tested Python big data pipeline, improving analysis of 8,000+ rows CSV and Excel dataset from robotic sensors by 75%<br/>
            • Initiated and built full-stack web app to automate evaluation of robotic system performance used in 2 research centers in less than 3 months (Pandas, Matplotlib, Javascript, Django, Bootstrap, Bokeh, HoloViews)
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: '#000', color: '#fff' }}
            contentStyle={{ background: '#000', color: '#fff' }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Drexel University</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Science - BS,</h4>
            <p>
              2018 - 2023
            </p>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
