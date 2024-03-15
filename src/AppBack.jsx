import { useState } from 'react';
import Content from './Content';
import image from './assets/codeScreenshot.jpeg';
import swapIcon from './assets/swap.png';

export default function AppBack() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="container">
            {isOpen ? (
                <>
                    <div className='swapbackbutton' onClick={() => setIsOpen(false)}>
                        <button className='icon-button'>
                            <img className='icon' src={swapIcon} alt="Swap Icon"/>
                        </button>
                    </div>
                    <div className="purplediv2">
                        <img className='codeExample' src={image} alt="Profile Picture" />    
                    </div>          
                    <h2>Contacts API</h2>
                    <h1 className='subTitle'>about the project</h1>
                    <p>A project made with  Node.js, Express, and MongoDB API for managing contacts, providing user registration, login, and secure access to contact lists using JSON Web Tokens (JWT).</p>
                    <p><a href="https://github.com/MilenaDuarte22/Mybackend_Project">Check this project and more on my github!</a></p>
                </>
            ) : (
                <Content />
            )}
        </div>
    );
}
