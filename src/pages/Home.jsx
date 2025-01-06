import Banner from '../components/Banner/Banner';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import data from '../data/data.json';
import Form from '../components/Form/Form';
import '../styles/home.css'
import SkillContent from '../components/SkillContent/SkillContent';

function Home() {
    return (
        <main>
            <SkillContent />
            <CardsContainer data={data} />
            <Form />
        </main>
    )
}

export default Home;