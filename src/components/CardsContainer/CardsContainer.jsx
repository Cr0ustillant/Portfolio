import Card from "../Cards/Card";
import '../CardsContainer/cardsContainer.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

function CardsContainer({data}) {

    const [sliderIndex ,setSliderIndex] = useState(0)

    const prevSlide = () => {
        setSliderIndex((sliderIndex === 0) ? data.length - 1 : sliderIndex - 1);
    };

    const nextSlide = () => {
        setSliderIndex((sliderIndex === data.length - 1) ? 0 : sliderIndex + 1);
    };

    return (
        <section className="main-cards">
            <h2 id="project">{data[sliderIndex][0].sectionTitle}</h2>
            <div className="cards-container">
                {data[sliderIndex].map((card , index) => (
                    <Link to={data[sliderIndex][index].link}><Card key={'card'+ index} title={card.title} description={card.description} imgSrc={card.src} skill={card.skill}/></Link>) 
                    )}
                <i className="fa-solid fa-arrow-left" onClick={prevSlide}></i>
                <i className="fa-solid fa-arrow-right" onClick={nextSlide}></i>
            </div>
        </section>
    )
}

export default CardsContainer;