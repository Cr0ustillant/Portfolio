import './SkillContent.css';

function SkillContent() {
    return (
        <section className="skill-section">
            <div className="skill-container">
                <h2>Mes compétences</h2>
                <article>
                    <ul>Languages connues :
                        <li>• HTML 5</li>  
                        <li>• CSS</li> 
                        <li>• JavaScript</li>
                    </ul>
                    <ul>Outils :
                        <li>• Git/Git-hub </li>
                        <li>• Vscode </li>
                        <li>• Figma</li>
                    </ul>
                </article>
                <article>
                    <ul>Mon parcours :
                       <li>• La nursseries numériques</li> 
                       <li>• OpenClassRooms "intégrateur web"</li>
                        
                    </ul>
                </article>
                <article>
                    <ul>Mon savoir faire : 
                        <li>• Référencement et optimiser les performances d'un site/application Web,</li>
                        <li>• Intégration de fonctionalité et d'interface utilisateur dynamique,</li>
                        <li>• Création d'animation css</li>
                        <li>• Utilisation d'un terminal et d'API</li>
                    </ul>
                </article>
                
            </div>
        </section>
    )
}

export default SkillContent;
