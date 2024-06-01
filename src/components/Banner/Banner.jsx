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
        <div className="banner">
            <img src={data[imgIndex].src} alt={data[imgIndex].title} />

        </div>
    );
}

export default Banner;