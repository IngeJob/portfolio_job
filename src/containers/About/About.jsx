import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import perfil from '../../assets/foto_carnet.jpg';
import GridLogos from '../../components/GrigLogos/GridLogos';
import './about.css';

const About = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className='app__about section__padding app__wrapper' id='about'>
      <div className='app__about-photo app__wrapper_info'>
        <img src={perfil} alt="perfil" />
      </div>

      <div className='app__about-info app__wrapper_info'>
        <h1 className='p__title'>{textData.about.title}</h1>
        <p className='p__text'>{textData.about.description}</p>
        <GridLogos />
      </div>
    </div>
  )
}

export default About