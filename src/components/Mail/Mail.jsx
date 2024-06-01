function Mail({ name, firstname, textMessage }) {
    if (!name && !firstname  && !textMessage) {
        return <div>Aucune donnée disponible</div>;
    }
    return (
        <div className="mail-card">
            <p><strong>Nom :</strong> {name === "" ? "* Non spécifié" : name }</p>
            <p><strong>Prénom :</strong> {firstname === "" ? "* Non spécifié" : firstname }</p>
            <p><strong>Message :</strong> {textMessage === "" ? "* Non spécifié" : textMessage }</p>
        </div>
    );
}

export default Mail;