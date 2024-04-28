import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCodepen,
  faLinkedin,
  faMedium,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id='contact'>
      <div className='social-icons'>
        <FontAwesomeIcon icon={faGithub} size='3x' className='fa-svg' />
        <FontAwesomeIcon icon={faCodepen} size='3x' className='fa-svg' />
        <FontAwesomeIcon icon={faLinkedin} size='3x' className='fa-svg' />
        <FontAwesomeIcon icon={faMedium} size='3x' className='fa-svg' />
        <FontAwesomeIcon icon={faInstagram} size='3x' className='fa-svg' />
        <FontAwesomeIcon icon={faYoutube} size='3x' className='fa-svg' />
      </div>
    </section>
  );
}

export default Contact;
