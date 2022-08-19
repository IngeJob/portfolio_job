import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import AnimatedBg from '../../components/Animated_bg/AnimatedBg';
import Canvas from '../../components/Canvas/Canvas';
import './header.css';
import Logo from '../../components/Logo/Logo';

const Header = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <section className='app__header app__wrapper section__padding' id='home'>
      <AnimatedBg />
      <div className='app__header-info app__wrapper_info'>
        <span className='app__header-text p__text'>{textData.header.greeting}</span>
        <span className='app__header-name p__title'>{textData.header.name}</span>
        <p>Jobs</p>
        <span className='app__header-text p__text'>{textData.header.about1}</span>
        <span className='app__header-text p__text'>{textData.header.about2}</span>
      </div>

      <div className='app__header-paint app__wrapper_info'>
        <Canvas />   
        <Logo />   
      </div>
    </section>
  )
}

export default Header