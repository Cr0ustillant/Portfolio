import Banner from '../components/Banner/Banner';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import data from '../data/data.json';
import dataCarousel from '../data/carousel.json'
import Game from '../components/Game/Game';
import '../styles/home.css'

function Home() {
    return (
        <div>
            <Banner data={dataCarousel}/>
            <CardsContainer data={data} />
            <Game /> 
        </div>
    )
}

export default Home;