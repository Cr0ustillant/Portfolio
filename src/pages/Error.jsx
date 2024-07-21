import { Link } from 'react-router-dom';
import '../styles/error.css';
function Error() {
    return (
        <main className="main-error">
                <h1>Erreur 401</h1>
                <strong>Page introuvable</strong>
                <Link to="/"><p>Retour à la page d'acceuil</p></Link>
        </main>
    )
}

export default Error;