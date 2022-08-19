import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import GridProjects from '../../components/GridProjects/GridProjects';

import './projects.css';

const Projects = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className='app__projects section__padding' id='projects'>
      <h1 className='p__title'>{textData.projects.title}</h1>
      <GridProjects />
    </div>
  )
}

export default Projects