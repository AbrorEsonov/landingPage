import { Link } from 'react-router-dom'
import './HeroSection.css'
import { Button } from "../Buttons/Button"

function HeroSectionThree() {
    return (
    <>
         <div
        className='home__hero-section darkBg'
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection:'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>Service and Price</div>
                <ul className="card__contents">
                    <li>Excepteur ............................. $45</li>
                    <li>Excepteur ............................. $45</li>
                    <li>Excepteur ............................. $45</li>
                    <li>Excepteur ............................. $45</li>
                    <li>Excepteur ............................. $45</li>
                    <li>Excepteur ............................. $45</li>
                </ul>
                <Link style={{paddingLeft: 20}} to='/contact'>
                  <Button buttonSize='btn--medium' buttonColor='blue'>
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper person'>
                <img src='images/svg-2.svg' alt='Credit Card' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
    )
}

export default HeroSectionThree
