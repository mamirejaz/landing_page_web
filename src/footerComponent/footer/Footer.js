import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (

        <div className='headercontainer' style={{"position":"fixed", "bottom":"0"}}> 
            <section>
            <div class="navbar navbar-inverse navbar-fixed-bottom">
                <div class="container">
                    <p class="navbar-text">© MyWorld</p>
                </div>
            </div>
            </section>
        </div >

    )
}

export default Footer;