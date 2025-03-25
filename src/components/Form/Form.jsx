import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Form/Form.css";

function Form() {
    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");
    const [status, setStatus] = useState(""); 
    const form = useRef(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (textMessage !== "") {
            // Utilisation d'EmailJS pour envoyer le message
            emailjs
                .sendForm(
                    "service_2qow6tw",    
                    "template_pvijxmw",   
                    form.current,
                    "UGa-9B_skvjsXl1Tv"     
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setStatus("Message envoyé avec succès !");
                        setName(""); // Réinitialiser les champs du formulaire
                        setFirstname("");
                        setEmail("");
                        setTextMessage("");
                    },
                    (error) => {
                        console.log(error.text);
                        setStatus("Une erreur s'est produite. Veuillez réessayer.");
                    }
                );
        } else {
            alert("Le message est vide !");
        }
    };

    return (
        <section className="contact-section">
            <div className="title-form">
                <h2 id="contact">Me contacter</h2>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nom :
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="firstname">Prénom :
                        <input
                            type="text"
                            id="firstname"
                            name="user_firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <label htmlFor="email">Email :
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="textMessage">Message :
                    <textarea
                        id="textMessage"
                        name="message"
                        rows={15}
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                        required
                        style={{resize: "none",maxLength: "700"}}
                    />
                </label>
                <button type="submit">Envoyer</button>
                {status && <p>{status}</p>}
            </form>
        </section>
    );
}

export default Form;