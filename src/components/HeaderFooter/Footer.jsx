import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <ul>
                <li>Me contacter : 
                    <br />
                    <br />
                    <Link to="https://www.microsoft.com/fr-fr/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0" target="blank"> ********@outlook.fr</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;