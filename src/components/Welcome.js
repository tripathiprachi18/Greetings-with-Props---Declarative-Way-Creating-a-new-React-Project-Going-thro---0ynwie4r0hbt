// write code for Welcome component here
import React,{useState} from 'react';

const Welcome = ({name}) => {
    let sayHi = `Hey ${name}!`;
    let greetMessage = `Welcome to the coding society.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome;
