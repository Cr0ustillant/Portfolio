import React, { useState, useContext } from "react";
import { FormDataContext } from '../../context/FormDataContext';
import "../Form/Form.css";

function Form() {
    const { addFormData } = useContext(FormDataContext);

    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(textMessage !== ""){
        
        addFormData({ name, firstname, email, textMessage });
        }
        else {
            alert("Le message est vide !")
        }
        // Redirection vers la page MailBox
    };

    return (
        <div className="contact-section">
            <h2 id="contact">Me contacter</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="firstname">Prénom
                    <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </label>
                <label htmlFor="email">Email
                    <input text="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="textMessage">Message :
                    <textarea id="textMessage"  rows={15} value={textMessage} onChange={(e) => setTextMessage(e.target.value)}/>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Form;