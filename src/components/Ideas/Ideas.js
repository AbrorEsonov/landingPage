import { Button } from '../Buttons/Button';
import './Ideas.css';
import { FaProductHunt } from "react-icons/fa"
import { MdFolderSpecial } from "react-icons/md"
import { BsFillChatSquareDotsFill } from "react-icons/bs"
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Ideas() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/contact' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaProductHunt />
                </div>
                <h3>Our Products</h3>
                <p className="pricing__container-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel odio,
                 corporis ipsum quaerat labore eos itaque nobis aperiam adipisci omnis?</p> 
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Read More
                </Button>
              </div>
            </Link>
            <Link to='/contact' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                 <MdFolderSpecial />
                </div>
                <h3>Specials</h3>
                <p className="pricing__container-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Debitis nobis quo perferendis quia iusto nesciunt dolorem vero fuga vitae exercitationem.</p>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Read More
                </Button>
              </div>
            </Link>
            <Link to='/contact' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsFillChatSquareDotsFill />
                </div>
                <h3>Care Lips</h3>
                <p className="pricing__container-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Adipisci blanditiis cum molestiae amet! Architecto tempore delectus quas possimus voluptatem qui?</p>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Read More
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Ideas;