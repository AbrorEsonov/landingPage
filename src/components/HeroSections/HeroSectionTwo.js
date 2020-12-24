import './HeroSection.css'

function HeroSectionTwo() {
    return (
        <>
         <div
        className='home__hero-section'
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line' style={{marginBottom: 36}}>Makeup artist</div>
                <p
                  className='home__hero-subtitle dark'
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='images/svg-3.svg' alt='Vault' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default HeroSectionTwo
