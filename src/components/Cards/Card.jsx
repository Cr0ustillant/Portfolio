function Card({ title , description , imgSrc , skill , alt }) {
    return (
        <figure>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
            <div className="wrapper">
                <div className="triangle"></div>
                <img src={imgSrc} alt={alt} />
                <ul className="skill-card">
                    {skill.map((element, index) => (<li key={index + skill}>{element}</li>)
                )}  
                </ul>
            </div>
        </figure>
    )
}

export default Card