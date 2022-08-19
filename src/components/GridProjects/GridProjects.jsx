import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import armani from '../../assets/armani.jpg';
import restaurant from '../../assets/landing_page-restaurant.jpg';
import webshop from '../../assets/webshop.jpg';
import movieApp from '../../assets/movieApp.jpg';
import { css3,  html5, javascript, mui, react, redux, sass, typescript } from '../../assets/logos';
import './gridProjects.css';

const GridProjects = () => {
    const { textData } = useContext(LanguageContext);

  return (
    <div className='grid__project-container'>
        <div className='grid__project-card'>
            <img src={restaurant} alt='restaurant' />
            <div className='card__hover'>
                <h1 className='p__text'>{textData.projects.project1}</h1>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/restaurant-website/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/restaurant-website' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={armani} alt='domotica' />
            <div className='card__hover'>
                <h1 className='p__text'>{textData.projects.project2}</h1>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />
                    <img src={mui} alt='mui' style={{paddingTop: '4px'}} />
                    <img src={typescript} alt='typescript' />                 
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/Clone-Armani-Principal-Page/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/Clone-Armani-Principal-Page' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={webshop} alt='webshop' /> 
            <div className='card__hover'>
                <h1 className='p__text'>{textData.projects.project3}</h1>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />
                    <img src={mui} alt='mui' style={{paddingTop: '4px'}} />
                    <img src={typescript} alt='typescript' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/webshop/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/webshop' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={movieApp} alt='movieApp' /> 
            <div className='card__hover'>
                <h1 className='p__text'>{textData.projects.project4}</h1>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={sass} alt='sass' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />
                    <img src={redux} alt='redux' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/HVOMax/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/HVOMax' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridProjects