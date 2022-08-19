import React from 'react';

import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsTelegram, BsLinkedin } from "react-icons/bs";
import './gridContact.css';

const GridContact = () => {
  return (
    <div className='grid__contact-container'>
        <a className='custom__button' href='mailto:brayanjob_93@hotmail.com' target='_blank' rel="noreferrer">
            <div className='grid__contact-card'>
                <h2 className='p__title'>Email</h2>
                <BiMailSend />
            </div>
        </a>

        <a className='custom__button' href='https://www.linkedin.com/in/brayan-job-horna-berrezueta/' target='_blank' rel="noreferrer">
            <div className='grid__contact-card'>
                <h2 className='p__title'>LinkedIn</h2>
                <BsLinkedin />
            </div>
        </a>

        <a className='custom__button' href='https://github.com/IngeJob' target='_blank' rel="noreferrer">
            <div className='grid__contact-card'>
                <h2 className='p__title'>GitHub</h2>
                <BsGithub />
            </div>
        </a>

        <a className='custom__button' href='https://t.me/JobHB' target='_blank' rel="noreferrer">
            <div className='grid__contact-card'>
                <h2 className='p__title'>Telegram</h2>
                <BsTelegram />
            </div>
        </a>
        
    </div>
  )
}

export default GridContact