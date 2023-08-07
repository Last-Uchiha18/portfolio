import './content.css'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'


function Content() {

    return (
        
            <div className="content">
                <div className="leftSection">
                    <h1 className="heading">
                        Nikhil is a software engineer who loves to craft a good story via code.
                    </h1>
                   <div className="line"></div>
                    <h3 className="bio">
                        I do front-end development, back-end development, and mobile development. Currently, I&apos;ve 3 years
                        of experience.
                    </h3>
                    <ul>
                        <li className='linkedIn'> <a href="" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={24} /></a></li>
                        <li className='github'> <a href="" target="_blank" rel="noopener noreferrer"> <FaGithub size={24} /></a></li>
                        <li className='leetcode'> <a href="" target="_blank" rel="noopener noreferrer"> <FaCode size={24} /></a></li>
                    </ul>
                </div>

          
                <img src="../public/profilePic.jpeg" alt="Fuck this shit" className='profilePic' />
              
        
            </div>
    
    )
}

export default Content;