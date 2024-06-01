

function Card({ title , description , imgSrc , language }) {
    return (
        <figure>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{language}</p>
            </figcaption>
            <div className="wrapper">
                <div className="triangle"></div>
                <img src={imgSrc} alt={"image du site "+title} />
            </div>
        </figure>
    )
}

export default Card