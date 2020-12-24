import './People.css';
import { Link } from 'react-router-dom';

function People() {
  return (
      <div className='people__section'>
        <div className='people__wrapper'>
          <h3 className='people__topline'>Excepteur sint occaecat c</h3>
          <h1 className="people__headline">What they say</h1>
          <div className='people__container'>
            <div className='people__container-card'>
              <div className='people__container-cardInfo'>
                <div className='people__image'>
                 <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpZWZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"/>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Delectus ipsam exercitationem quo praesentium maiores impedit reiciendis suscipit harum iusto, quae fuga quibusdam?</p>
                <Link className="people__join" to='/contact' >
                  Join me
                </Link>
              </div>
            </div>
            <div className='people__container-card'>
              <div className='people__container-cardInfo'>
                <div className='people__image'>
                <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpZWZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"/>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                 Optio, quod officia magni similique quia culpa labore dolorum veritatis tempora nemo consequatur accusantium quibisdam.</p>
                <Link className="people__join" to='/contact' >
                   Join me
                </Link>
              </div>
            </div>
            <div className='people__container-card'>
              <div className='people__container-cardInfo'>
                <div className='people__image'>
                 <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpZWZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="people"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ad, sequi voluptatem nihil necessitatibus explicabo vero soluta praesentium quam, consequatur unde nam distinctio.</p>
                <Link className="people__join" to="/contact">
                  Join me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default People;