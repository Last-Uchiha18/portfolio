import './footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return  (
        <div className="footer">
        
            <p >©2023 Nikhil Sharma. All Rights Reserved.</p>
            <div className='socials'>
                <li className='linkedIn'> <a href="" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={24} /></a></li>
                <li className='github'> <a href="" target="_blank" rel="noopener noreferrer"> <FaGithub size={24} /></a></li>
            </div>
        </div>
    )
}

export default Footer;