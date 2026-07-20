import React from 'react';
import "../App.css";

function Greetings({message}) {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This content is rendered on the browser.</p>
            <p>{message}</p>
        </div>
    );
}

export default Greetings;