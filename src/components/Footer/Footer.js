import './Footer.css';
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <div className="footer__images-wrapper">
       <div className="footer-img">
         <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWdyZWVtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Agreement"/>
        <img className="hidden-img-first"  src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmVlbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Agreement"/> 
        <img className="hidden-img-second" src="https://images.unsplash.com/photo-1578318774420-677a96c0cf8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmVlbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Agreement"/> 
       </div>
    </div>
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <Link to='/sign-up'>About Us</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Terms & Conditions</Link>
          </div>
          <div className='footer-link-items'>
         <div className="name-icon"> <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link> <Link className="social-name" to='/'>Instagram</Link>
           </div>
           <div className="name-icon"> <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link> <Link className="social-name" to='/'>Facebook</Link> </div>
          <div className="name-icon">  <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link className="social-name" to='/'>Twitter</Link> </div>
          </div>
          <section className='footer-subscription'>
         <p className='footer-subscription-text'>
          Subscribe to our newsletter
        </p> 
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Ok</Button>
          </form>
        </div> 
      </section>
      <div className='footer-link-items'>
          <Link to='/sign-up'>497 EverGreen Rd. Roseville, CA 95673</Link>
            <Link to='/'>+44 345 678 903</Link>
            <Link to='/'>adobexd@gmail.com</Link>
          </div>
        </div>
      </div>
          <small className='website-rights'>Adobe XD Kit © 2020</small>
    </div>
    </div>
  );
}

export default Footer;