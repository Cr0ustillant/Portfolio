import '../HeaderFooter/headerfooter.css'
import { Link } from 'react-router-dom';

function Header({setCurrentSlide}) {
    return (
        <header>
            <div className='logo-container'>
                <Link to="https://github.com/Cr0ustillant?tab=repositories" target="blank" >
                    <h1 className='logo'>Jérôme Duprez</h1>
                    <div className='sub-title'>Intégrateur web / Développeur web front-end</div>
                </Link>
            </div>
            <nav>   
                <ul>
                    <li> 
                        <Link to="/" onClick={() => setCurrentSlide(0)}>Accueil
                            <i className="fa-solid fa-house"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Cr0ustillant?tab=repositories" target="blank">GitHub
                        <i className="fa-brands fa-github"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-duprez-13248231b/?trk=opento_sprofile_topcard">Linkedin
                        <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;