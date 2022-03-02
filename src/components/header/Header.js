import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (

        <div className='headercontainer'>
            <section>
                <a href='/home'>
                    <img className='logomyworld' alt='MyWorld' src={require('./logomyworld2.jpg')} ></img>
                </a>
                <div className='title'>
                    <h2 className='titletext' style={{paddingTop: '12px'}}>MyWorld</h2>
                </div>
                <div className='icons'>
                    <a href='https://www.twitter.com/'  className='twitterIcon'>
                        <FontAwesomeIcon icon={faTwitter} className = 'socialmediaicons' />
                    </a>
                    <a href='https://www.linkedin.com/' className='LinkedinIcon'>
                        <FontAwesomeIcon icon={faLinkedin} className = 'socialmediaicons' />
                    </a>
                    <a href='https://www.facebook.com/' className='planeIcon'>
                        <FontAwesomeIcon icon={faPaperPlane} className = 'socialmediaicons' />
                    </a>
                </div>


            </section>
        </div >

    )
}

export default Header;