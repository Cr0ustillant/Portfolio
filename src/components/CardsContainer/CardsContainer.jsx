import Card from "../Cards/Card";
import '../CardsContainer/cardsContainer.css';
import Background from "../../assets/images/imgBannerPlanete.webp"
function CardsContainer({data}) {
    return (
        <section>
            <img className="background-img" src={Background} alt="image de fond"/>
            {data[0].map((card , index) => (
                <Card key={'card'+ index} title={card.title} description={card.description} imgSrc={card.src}/>) 
            )}
        </section>
    )
}

export default CardsContainer;