import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

import {images} from '../../constans'

import './About.scss'

const abouts = [
  { title: "Web Development", description: 'I am good web deweloper', img: images.about01 },
  {title: "Web Design", description: 'I am good web designer', img: images.about02},
  { title: "Frontend", description: 'I am good web frontend deweloper', img: images.about03 },
  {title: "Backend", description: 'I am good web backend deweloper', img: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I know That <span>Good Apps</span> <br /> means <span>Good Bussines</span></h2>
      <div className='app__profile'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + about.index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About