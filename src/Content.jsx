import image from './assets/profilepic.jpeg';
import linkIcon from './assets/linkedin.png';
import gitIcon from './assets/github.png';
import swapIcon from './assets/swap.png';
import AppBack from './AppBack.jsx';
import { useState } from 'react';


export default function Content(){
  //open / close variable
    const [isOpen, setIsOpen] = useState(true);

    return(
      <div className='content'>
        
        {isOpen && (
          <>
          <div className='swapbutton' onClick={() => setIsOpen((is)=> !is)}>
            <button className='icon-button'>
              <img className='icon' src={swapIcon} alt="Swap Icon"/>
            </button>  
          </div>

          <div className='purplediv'></div><img className='profile' src={image} alt="Profile Picture" /><h2>Milena Duarte</h2><h4>Web Developer</h4><div className='buttons'>

            <button className='icon-button' onClick={() => window.open('https://www.linkedin.com/in/milena-duarte-874b1a1b5/')}>
              <img className='icon' src={linkIcon} alt="LinkedIn Icon" />
            </button>

            <button className='icon-button' onClick={() => window.open('https://github.com/MilenaDuarte22')}>
              <img className='icon' src={gitIcon} alt="GitHub Icon" />
            </button>

          </div>
          
          <h3>About me</h3><p>I am a web developer, passionate about turning ideas into real applications through code. From conceptualization to designing applications, <br />  I thrive on bringing concepts to life. </p><h3>Interests</h3><p>I have interest in backend development, i am constantly striving to develop more efficient solutions. Programming languages i specialise in: Java, C#, and Kotlin. </p>
          </>
        )}
       {!isOpen && <AppBack />}
      </div>
    );
  }
  