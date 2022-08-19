import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import GridContact from '../../components/GridContact/GridContact';
import './contact.css';

const Contact = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className='app__contact section__padding' id='contact'>
      <h1 className='p__title'>{textData.contact.title}</h1>
      <GridContact />
    </div>
  )
}

export default Contact