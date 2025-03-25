import Card from "../Cards/Card";
import '../CardsContainer/cardsContainer.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

function CardsContainer({data}) {

    const [sliderIndex ,setSliderIndex] = useState(0)

    const nextSlide = () => {
        setSliderIndex((sliderIndex === data.length - 1) ? 0 : sliderIndex + 1);
    };

    return (
        <section className="main-cards">
            <h2 id="project">{data[sliderIndex][0].sectionTitle}</h2>
            <div className="cards-container">
                {data[sliderIndex].map((card , index) => (
                    <Link key={'link-card'+ index} to={data[sliderIndex][index].link} target="blank">
                        <Card key={'card'+ index} title={card.title} description={card.description} imgSrc={card.imgSrc} alt={card.alt} skill={card.skill}/>
                    </Link>) 
                    )}
                <div className="switch s-right" onClick={nextSlide}>Voir plus</div>
            </div>
        </section>
    )
}

export default CardsContainer;