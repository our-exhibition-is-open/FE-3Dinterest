import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const AvailableButton = styled.button`
    cursor: pointer;
    height: 2rem;
    width: 100%;
    background:#2fff00;
    backdrop-filter: blur(20px);
    border-radius: 0.4rem;

    color: white;
    font-family: "San Francisco";
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border: 0;
    box-shadow: 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00,
    0 0 5px #2fff00, 0 0 7px #2fff00;

    transform: translateX(0);
    transition: transform 0.2s ease-out;
    
`

export const Button = styled.button`
    z-index: 10;
    height: 2rem;
    width: 100%;

    border-radius: 0.4rem;
    border: 0;
    
    font-family: "San Francisco";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.05469rem;
    color: #ffffff;
    
    background:${(props) => props.buttoncolor};
    box-shadow: 0 0 0px #ffffff, 0 0 0px #ffffffc6, 0 0 0px #ffffff, 0 0 0px #ffffff,
    0 0 5px ${(props) => props.buttoncolor},
    0 0 7px ${(props) => props.buttoncolor};

    transform: translateX(${props => props.position}rem);
    transition: transform 0.2s ease;
`

export function SubmitButton({buttonState, buttonMessage}) {
    const [buttonPosition, setButtonPosition] = useState(0);
    
    function handleHover() {
        console.log(buttonPosition);
        if(!buttonState)
        {
            if(buttonPosition == 0)
                setButtonPosition(1);
            else 
                setButtonPosition(-1 * buttonPosition);
        }
    }
    return (
        <>
        <Button 
        onMouseEnter={handleHover} 
        position={buttonState? 0 : 20 * buttonPosition} 
        buttoncolor={buttonState ? "#2fff00" : "#ff0000"}
        >
                    { buttonState ? 
                        buttonMessage :
                        "Can't " + buttonMessage
                    }
        </Button>
        </>
    );
}