import Card from "../Cards/Card";
import '../CardsContainer/cardsContainer.css';
import Background from "../../assets/images/imgBannerPlanete.webp"
import { useState } from "react";


function CardsContainer({data}) {

    const [sliderIndex ,setSliderIndex] = useState(0)

    const prevSlide = () => {
        setSliderIndex((sliderIndex === 0) ? data.length - 1 : sliderIndex - 1);
    };

    const nextSlide = () => {
        setSliderIndex((sliderIndex === data.length - 1) ? 0 : sliderIndex + 1);
    };

    const setCarouselImg = (index) => {
        setSliderIndex(index);
    };

    return (
        <section>
            <h2 id="tittle">{data[sliderIndex][0].sectionTitle}</h2>
            <img className="background-img" src={Background} alt="Background"/>
            <i className="fa-solid fa-arrow-left" onClick={prevSlide}></i>
            {data[sliderIndex].map((card , index) => (
                <Card key={'card'+ index} title={card.title} description={card.description} imgSrc={card.src} language={card.language}/>) 
            )}
            <i className="fa-solid fa-arrow-right" onClick={nextSlide}></i>
        </section>
    )
}

export default CardsContainer;