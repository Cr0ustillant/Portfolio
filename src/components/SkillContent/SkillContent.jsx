import { useState } from "react";
import "./SkillContent.css";

function SkillContent() {
    // Liste des icônes + case vide (null)
    const [grid, setGrid] = useState([
        "fa-brands fa-js",
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fa-brands fa-python",
        "fa-brands fa-react",
        "fa-brands fa-sass",
        "fa-brands fa-figma",
        "fa-brands fa-git",
        null // Case vide
    ]);

    // Fonction pour déplacer une icône
    const moveIcon = (index) => {
        const emptyIndex = grid.indexOf(null); // Trouve la case vide

        // Calcul des coordonnées (3x3)
        const row = Math.floor(index / 3);
        const col = index % 3;
        const emptyRow = Math.floor(emptyIndex / 3);
        const emptyCol = emptyIndex % 3;

        // Vérifie si l'icône est adjacente à la case vide (haut, bas, gauche, droite)
        const isAdjacent =
            (Math.abs(row - emptyRow) === 1 && col === emptyCol) || 
            (Math.abs(col - emptyCol) === 1 && row === emptyRow);

        if (isAdjacent) {
            // Swap des positions
            const newGrid = [...grid];
            [newGrid[index], newGrid[emptyIndex]] = [newGrid[emptyIndex], newGrid[index]];
            setGrid(newGrid);
        }
    };

    return (
        <section className="skill-section">
            <h2>Bienvenue</h2>
            <div className="skill-container">
                {grid.map((icon, index) => (
                    <div
                        key={index}
                        className="grid-item"
                        onClick={() => icon && moveIcon(index)} // Se déplace seulement si ce n'est pas la case vide
                    >
                        {icon && <i className={icon}></i>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillContent;
