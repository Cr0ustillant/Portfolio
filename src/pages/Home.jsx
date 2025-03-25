import { useState } from 'react';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import data from '../data/data.json';
import Form from '../components/Form/Form';
import SkillContent from '../components/SkillContent/SkillContent';
import Header from '../components/HeaderFooter/Header';
import '../styles/home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const components = [<SkillContent />, <CardsContainer data={data} />, <Form />];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % components.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + components.length) % components.length);
    };

    return (
        <>
        <Header setCurrentSlide={setCurrentSlide} />
        <main>
            <div className="slider-container">
                {currentSlide > 0 &&
                <i className="prev fa-solid fa-angle-left" onClick={prevSlide}></i>
                }         
                <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {components.map((component, index) => (
                        <div className="slide" key={index}>
                            {component}
                        </div>
                    ))}
                </div>
                {currentSlide < 2 &&
                <i className="next fa-solid fa-angle-right" onClick={nextSlide}></i>
                }
                <div className='slider-pagination'>
                    {components.map((_, radioIdx) => (
                        <input 
                            key={"current-slide" + radioIdx}
                            type='radio' 
                            name='radio-button'
                            checked={currentSlide === radioIdx}
                            onChange={() => setCurrentSlide(radioIdx)}
                        />
                    ))}
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;
