function Card({ title , description , imgSrc , skill }) {
    return (
        <figure>
            <figcaption>
                <h3>{title}</h3>
                <p>{description}</p>
            </figcaption>
            <div className="wrapper">
                <div className="triangle"></div>
                <img src={imgSrc} alt={"image du site "+ title} />
                <div className="skill-card">
                    {skill.map((element, index) => (<p key={index + skill}>{element}</p>)
                )}  
                </div>
            </div>
        </figure>
    )
}

export default Card