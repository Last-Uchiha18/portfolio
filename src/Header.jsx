import './header.css'

function Header() {

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.style.transform = 'translateZ(0)';
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
        <div className="left-section">
          <li><a href="">Nikhil Sharma</a></li>
        </div>
        <div className="right-section">
          <ul>
            <li className='item1'><a href="">Home</a></li>
            <li className='item2'><a href="#aboutComponent" onClick={(e) => handleLinkClick(e, 'aboutComponent')}>About</a></li>
            <li className='item3'><a href="#projectsComponent" onClick={(e) => handleLinkClick(e, 'projectsComponent')}>Projects</a></li>
            <li className='item4'> <a href="#contactComponent" onClick={(e) => handleLinkClick(e, 'contactComponent')}>Contact</a></li>
          </ul>
        </div>
    </header>
  )
}

export default Header
