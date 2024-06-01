import Banner from '../components/Banner/Banner';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import data from '../data/data.json';
import dataCarousel from '../data/carousel.json';
import Form from '../components/Form/Form';
import '../styles/home.css'
import SkillContent from '../components/SkillContent/SkillContent';

function Home() {
    return (
        <div>
            <Banner data={dataCarousel}/>
            <SkillContent />
            <CardsContainer data={data} />
            <Form />
        </div>
    )
}

export default Home;