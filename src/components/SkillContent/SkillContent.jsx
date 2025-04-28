import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./SkillContent.css";

function SkillContent() {
  const icons = [
    { class: "fa-brands fa-js", name: "JavaScript" },
    { class: "fa-brands fa-html5", name: "HTML5" },
    { class: "fa-brands fa-css3-alt", name: "CSS3" },
    { class: "fa-brands fa-python", name: "Python" },
    { class: "fa-brands fa-react", name: "React" },
    { class: "fa-brands fa-sass", name: "Sass" },
    { class: "fa-brands fa-figma", name: "Figma" },
    { class: "fa-brands fa-git", name: "Git" },
    null, // Case vide
  ];

  const [grid, setGrid] = useState(icons);

  const moveIcon = (index) => {
    const emptyIndex = grid.indexOf(null);

    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {
      const newGrid = [...grid];
      [newGrid[index], newGrid[emptyIndex]] = [
        newGrid[emptyIndex],
        newGrid[index],
      ];
      setGrid(newGrid);
    }
  };

  return (
    <section className="skill-section">
      <h2>Bienvenue</h2>
      <div className="skill-container">
        {grid.map((icon, index) =>
          icon ? (
            <div key={index} className="grid-item" onClick={() => moveIcon(index)} data-tooltip-id={`tooltip-${index}`}>
              <i className={icon.class}></i>
              <Tooltip id={`tooltip-${index}`} className="tooltip" place="top" content={icon.name} />
            </div>
          ) : (
            <div key={index} className="grid-item empty"></div>
          )
        )}
      </div>
    </section>
  );
}

export default SkillContent;
