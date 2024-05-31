

function Card({ title , description , imgSrc }) {
    return (
        <figure>
            <figcaption>
                <h2>{title}</h2>
                <p>{description}</p>
            </figcaption>
            <div className="wrapper">
                <div className="triangle"></div>
                <img src={imgSrc} alt={"image du site "+title} />
            </div>
        </figure>
    )
}

export default Card