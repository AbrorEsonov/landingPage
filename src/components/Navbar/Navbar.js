import {useState} from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"
import { IconContext } from "react-icons/lib"



export default function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
              <div className="navbar-container container">
                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                      <li className="nav-item">
                          <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                            Authors
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/explore" className="nav-links"  onClick={closeMobileMenu}>
                            Explore
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/XD" className="nav-links"  onClick={closeMobileMenu}>
                            XD
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/blog" className="nav-links"  onClick={closeMobileMenu}>
                            Blog
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contact" className="nav-links"  onClick={closeMobileMenu}>
                            Contact
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>  
          </IconContext.Provider>
        </>
    )
}
