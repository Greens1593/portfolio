import React from 'react'
import { BsTelegram, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://t.me/MicaelGreen" target='_blank' rel='noreferrer'>
          <BsTelegram /> 
        </a>
        <a href="https://github.com/Greens1593" target='_blank' rel='noreferrer'>
            <BsGithub />  
        </a>  
    </div>
  )
}

export default SocialMedia