import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import './footer.css';

const Footer = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className='app__footer'>
      <p className='p__text'>{textData.footer.text}</p>
    </div>
  )
}

export default Footer