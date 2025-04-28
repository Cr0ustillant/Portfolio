import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";
import "../CardsContainer/cardsContainer.css";

function CardsContainer({ data }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 1023 ? 1 : 3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1023 ? 1 : 3);
      setSliderIndex(0); // Réinitialise pour éviter les incohérences
    };

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Déterminer le nombre de pages en fonction du nombre total d'éléments et du nombre d'éléments affichés
  const maxIndex = Math.ceil(data.length / itemsPerPage) - 1;

  // Gestion des boutons précédent / suivant
  const nextSlide = () => {
    setSliderIndex(sliderIndex < maxIndex ? sliderIndex + 1 : 0);
  };

  const prevSlide = () => {
    setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : maxIndex);
  };

  // Filtrer les éléments de la section actuelle (assure-toi que les objets contenant "sectionTitle" soient correctement placés)
  const filteredData = data.slice(sliderIndex * itemsPerPage, sliderIndex * itemsPerPage + itemsPerPage);

  return (
    <section className="main-cards">
      <h2 id="project">{data.find(item => item.sectionTitle)?.sectionTitle || "Projets"}</h2>
      <div className={`grid gap-4 w-full max-w-4xl ${itemsPerPage === 3 ? "grid-cols-3" : "grid-cols-1"} cards-container`}>
        {filteredData.map((card, index) => (
          <Link key={index} to={card.link} target="_blank">
            <Card title={card.title} description={card.description} imgSrc={card.imgSrc} alt={card.alt} skill={card.skill} />
          </Link>
        ))}
      </div>
      <div className="flex gap-4 mt-4 btn-box">
        <button onClick={prevSlide} disabled={sliderIndex === 0} className="btn">Précédent</button>
        <button onClick={nextSlide} disabled={sliderIndex === maxIndex} className="btn">Suivant</button>
      </div>
    </section>
  );
}

export default CardsContainer;
