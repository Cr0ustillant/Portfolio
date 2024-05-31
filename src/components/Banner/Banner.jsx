import { useState } from 'react';
import '../Banner/Banner.css';

function Banner({ data }) {
    const [imgIndex, setImgIndex] = useState(0);

    const prevSlide = () => {
        setImgIndex((imgIndex === 0) ? data.length - 1 : imgIndex - 1);
    };

    const nextSlide = () => {
        setImgIndex((imgIndex === data.length - 1) ? 0 : imgIndex + 1);
    };

    const setCarouselImg = (index) => {
        setImgIndex(index);
    };

    return (
        <div className='banner' style={{display:'hide'}}>
            <i className="fa-solid fa-arrow-left" onClick={prevSlide}></i>
            <img src={data[imgIndex].src} alt={data[imgIndex].title} />
            <i className="fa-solid fa-arrow-right" onClick={nextSlide}></i>
            <div className='index-carousel'>
                {data.map((_,index) => (
                <span
                    key={index} 
                    className={(index === imgIndex) ? "span-selected" : "" } 
                    id={"span" + index}  
                    onClick={() => setCarouselImg(index)}>
                </span>))}
            </div>
        </div>
    );
}

export default Banner;