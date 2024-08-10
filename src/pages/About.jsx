import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills } from '../constants';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am <span className="blue-gradient_text font-semibold drop-shadow">Aayush</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Undergraduate Computer Engineering student at The University of Texas at Austin, specializing in Machine Learning and data science.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've been involved with many student organizations, here's the breakdown:
          </p>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            date="January 2024 – May 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Team Member - Aggie Data Science Club x General Motors</h3>
            <p>
              Worked collaboratively in a team to work with General Motors on analyzing National Household Travel Survey datasets. Processed and interpreted data to gain insights related to GM’s goal for “Zero Crashes, Emissions, and Congestion”.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Relevant Skills: Machine Learning, Python, Python Libraries (NumPy, PyTorch, MatPlotLib), Forward and Backward Propagation, Gradient Descent, Data Processing, Feature engineering
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="December 2023 – May 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant - Urban Resilience Ai Lab</h3>
            <p>
              Conducted literature reviews and initial investigation to determine relevant wildfire occurance and severity features. Found relevant data to established features..
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Relevant Skills: Python, Python Libraries (NumPy + PyTorch)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="August 2023 – May 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Member - Texas A&M Cybersecurity Club</h3>
            <p>
              Heavily involved in Hack the Box, Cisco Training Academy, and CTF events. Competed in the campus-wide 2023 TAMU CTF and secured the 31st position.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Relevant Skills: Linux CLI, Linux systems
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="June 2022 – August 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Intern - Ambit Private Limited</h3>
            <p>
              As an intern I shadowed the Executive Director of IT and worked on migrating several core services to Kubernetes. Created professional presentations using PowerPoint presented to shareholders. 
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Relevant Skills: Kubernetes, Excel, PowerPoint, conflict-resolution
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
