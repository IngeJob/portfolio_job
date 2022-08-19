import { arduino, css3,  git,  html5,  illustrator,  javascript, matlab,  mui,
      photoshop,  proteus,  react,  schneider,  siemens, typescript } from '../../assets/logos'
import './gridLogos.css';

const GridLogos = () => {
  return (
    <div className='containerLogos'>
            <div>
              <img src={html5} alt="html5" />
              <p className='p__text'>HTML5</p>
            </div>
            <div>
              <img src={css3} alt="css3" />
              <p className='p__text'>CSS3</p>
            </div>
            <div>
              <img src={javascript} alt="javascript" />
              <p className='p__text'>Javascript</p>
            </div>
            <div>
              <img src={react} alt="react" />
              <p className='p__text'>React</p>
            </div>
            <div>
              <img src={git} alt="git" />
              <p className='p__text'>Git</p>
            </div>
            <div>
              <img src={typescript} alt="typescript" />
              <p className='p__text'>Typescript</p>
            </div>
            <div>
              <img src={mui} alt="mui" />
              <p className='p__text'>Material UI</p>
            </div>
            <div>
              <img src={illustrator} alt="illustrator" />
              <p className='p__text'>Adobe Illustrator</p>
            </div>
            <div>
              <img src={photoshop} alt="photoshop" />
              <p className='p__text'>Adobe Photoshop</p>
            </div>
            <div>
              <img src={arduino} alt="arduino" />
              <p className='p__text'>IDE de Arduino</p>
            </div>
            <div>
              <img src={matlab} alt="matlab" />
              <p className='p__text'>MatLab</p>
            </div>
            <div>
              <img src={proteus} alt="proteus" />
              <p className='p__text'>Proteus</p>
            </div>           
            <div>
              <img src={schneider} alt="schneider" />
              <p className='p__text'>Twido Suite</p>
            </div>
            <div>
              <img src={siemens} alt="siemens" />
              <p className='p__text'>Tia Portal</p>
            </div>           
        </div>
  )
}

export default GridLogos