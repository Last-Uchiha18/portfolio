import './header.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [showMenu, setShowMenu] = useState(false)

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    setShowMenu(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.style.transform = 'translateZ(0)';
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleHamburgerMenu = () => {
      setShowMenu(!showMenu)
  }

  if (showMenu === true) {
    return (
        <div className='ham'>
            <li ><a href="" className='closeHam' onClick={toggleHamburgerMenu}>X</a></li>
            <li className='item1'><a href="#homeComponent" onClick={(e) => handleLinkClick(e, 'homeComponent')}>Home</a></li>
            <li className='item2'><a href="#aboutComponent" onClick={(e) => handleLinkClick(e, 'aboutComponent')}>About</a></li>
            <li className='item3'><a href="#projectsComponent" onClick={(e) => handleLinkClick(e, 'projectsComponent')}>Projects</a></li>
            <li className='item4'> <a href="#contactComponent" onClick={(e) => handleLinkClick(e, 'contactComponent')}>Contact</a></li>
        </div>
    )
  }

  return (
        <header id="homeComponent">
            <div>
              <a href="">Nikhil Sharma</a>
            </div>
            <div className= 'right-section'>
                <ul className='nav-links'>
                  <li className='item1'><a href="">Home</a></li>
                  <li className='item2'><a href="#aboutComponent" onClick={(e) => handleLinkClick(e, 'aboutComponent')}>About</a></li>
                  <li className='item3'><a href="#projectsComponent" onClick={(e) => handleLinkClick(e, 'projectsComponent')}>Projects</a></li>
                  <li className='item4'> <a href="#contactComponent" onClick={(e) => handleLinkClick(e, 'contactComponent')}>Contact</a></li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleHamburgerMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
        
  )
}

export default Header
