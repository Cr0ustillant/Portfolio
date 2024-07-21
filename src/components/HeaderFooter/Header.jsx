import '../HeaderFooter/headerfooter.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='logo-container'>
                <Link to="https://github.com/Cr0ustillant?tab=repositories" target="blank" >
                    <h1 className='logo'>Jérôme Duprez</h1>
                    <div className='sub-title'>Intégrateur-Web Junior</div>
                </Link>
            </div>
            <nav>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <li><a href='#project'>Mes projets</a></li>
                    <li><a href='#contact'>Me contacter</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;