import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {Tooltip as ReactTooltip} from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import {urlFor, client} from '../../client'

import "react-tooltip/dist/react-tooltip.css";
import './Scills.scss'

const Scills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

   useEffect(() => {

     const query = '*[_type == "experiences"]'
     const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
      .then(data => {
        setExperiences(data);
      })
     
    client.fetch(skillsQuery)
      .then(data => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app-flex'
              key={index}
            >
              <div
                className='app__flex' 
                style={{backgroundColor: skill.bgColor}}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences?.map((experience, index) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div
                className='app__skills-exp-year'
              >
                <p className='bold-text'>{experience.year }</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      id={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      anchorId={work.name}
                      place='top'
                      content={work.desc}
                      className='skills-tooltip'
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Scills, 'app__skills'),
  'skills',
  'app__whitebg'
)