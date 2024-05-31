import React, { useState, useEffect } from 'react';

function Requin() {
    const [position, setPosition] = useState({ left: 0, top: 0 });

    const moveSpeed = 30; // Vitesse de déplacement en pixels par étape

    const handleKeyDown = (event) => {
        if (event.key === "d") {
            setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left + moveSpeed }));
        } else if (event.key === "q") {
            setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left - moveSpeed }));
        } else if (event.key === "z") {
            setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top - moveSpeed }));
        } else if (event.key === "s") {
            setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top + moveSpeed }));
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div id='requin' style={{left: `${position.left}px`, top: `${position.top}px` }}>
            {/* Votre image du requin ici */}
        </div>
    );
}

export default Requin;