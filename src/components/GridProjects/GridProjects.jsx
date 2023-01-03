import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import armani from '../../assets/armani.jpg';
import restaurant from '../../assets/landing_page-restaurant.jpg';
import webshop from '../../assets/webshop.jpg';
import movieApp from '../../assets/movieApp.jpg';
import coffee_street from '../../assets/coffee_street.jpg';
import pizza_house from '../../assets/pizza_house.jpg';
import smart_home from '../../assets/smart_home.jpg';
import delivery_food from '../../assets/delivery_food.jpg';
import { css3,  html5, javascript, figma, mui, react, redux, sass, typescript, nodejs, mongodb } from '../../assets/logos';
import './gridProjects.css';

const GridProjects = () => {
    const { textData } = useContext(LanguageContext);

  return (
    <div className='grid__project-container'>
        <div className='grid__project-card'>
            <img src={coffee_street} alt='coffee_street' />
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project1}</p>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={react} alt='react' />
                    <img src={redux} alt='redux' />
                    <img src={typescript} alt='typescript' />
                    <img src={mui} alt='mui' style={{paddingTop: '4px'}} />
                    <img src={nodejs} alt='nodejs' />
                    <img src={mongodb} alt='mongodb' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://cafe-street-client.vercel.app/home' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/cafe_street-client' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={pizza_house} alt='pizza_house' />
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project2}</p>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />
                    <img src={redux} alt='redux' />
                    <img src={typescript} alt='typescript' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/restaurant-website/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/restaurant-website' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={restaurant} alt='restaurant' />
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project3}</p>
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
            <img src={smart_home} alt='smart_home' />
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project4}</p>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={html5} alt='html5' />
                    <img src={css3} alt='css3' />
                    <img src={javascript} alt='javascript' />
                    <img src={react} alt='react' />              
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://ingejob.github.io/smart_home-web/' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/IngeJob/smart_home-web' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>

        <div className='grid__project-card'>
            <img src={webshop} alt='webshop' /> 
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project5}</p>
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
                <p className='p__text'>{textData.projects.project6}</p>
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

        <div className='grid__project-card'>
            <img src={armani} alt='armani' /> 
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project7}</p>
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
            <img src={delivery_food} alt='movieApp' /> 
            <div className='card__hover'>
                <p className='p__text'>{textData.projects.project8}</p>
                <div className='barra' />
                <div className='logo__hover'>
                    <img src={figma} alt='figma' />
                    <img src={react} alt='react' />
                    <img src={mui} alt='mui' style={{paddingTop: '4px'}} />
                    <img src={redux} alt='redux' />
                </div>
                <div className='button__hover'>
                    <a className='custom__button' href='https://delivery-food-team-3.netlify.app/home' target='_blank' rel="noreferrer" >{textData.projects.button}</a>
                    <a className='custom__button' href='https://github.com/LestherGonzalezAguilar/delivery_system/tree/dev' target='_blank' rel="noreferrer" >Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GridProjects