import { Link } from 'react-router-dom'
import './HeroSection.css'
import { Button } from "../Buttons/Button"

function HeroSectionOne() {
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
                <div className='top-line'>Section Title</div>
                <h1 className='heading'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                </h1>
                <Link to='/contact'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='images/svg-1.svg' alt='Credit Card' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HeroSectionOne
