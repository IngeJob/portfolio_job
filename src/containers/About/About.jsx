import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import GridLogos from '../../components/GrigLogos/GridLogos';
import './about.css';
import Logo from '../../components/Logo/Logo';

const About = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className='app__about section__padding app__wrapper' id='about'>
      <Logo />

      <div className='app__about-info app__wrapper_info'>
        <h1 className='p__title app__about-title'>{textData.about.title}</h1>
        <p className='p__text'>{textData.about.description}</p>
        <GridLogos />
      </div>
    </div>
  )
}

export default About