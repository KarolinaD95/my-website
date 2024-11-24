import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialMediaColumn() {
    return (
        <div className="social-media-column">
            <a href="https://www.linkedin.com/in/karolina-maria-dabrowska/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/Karola.d/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/KarolinaD95" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:k.dabrowska@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    );
}

export default SocialMediaColumn;
