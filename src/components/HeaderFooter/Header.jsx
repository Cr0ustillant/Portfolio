import '../HeaderFooter/headerfooter.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='logo-container'>
                <Link to="https://github.com/Cr0ustillant?tab=repositories" target="blank" ><div className='logo'>Jérôme Duprez</div></Link>
            </div>
            <nav>
                <ul>
                    <Link><li>Accueil</li></Link>
                    <Link><li>Mes projets</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;