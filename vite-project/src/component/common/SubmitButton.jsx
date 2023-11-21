import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const AvailableButton = styled.button`
    height: 2rem;
    width: 100%;
    background:#ff0000;
    backdrop-filter: blur(20px);
    border-radius: 0.4rem;

    border: 0;
    box-shadow: 0 0 0px #ff0000, 0 0 0px #ff2525c7, 0 0 0px #ff2222, 0 0 0px #ff1919,
    0 0 5px #ff2020, 0 0 7px #ff3232;
    /* background-color: transparent; */
`

const Image = styled.img`
    object-fit: cover;
`

export const NotAvailableButton = styled.button`
    z-index: 10;
    height: 2rem;
    width: 100%;
    background:#ff0000e6;
    backdrop-filter: blur(50px);
    border-radius: 0.4rem;
    border: 0;
    /* background-color: transparent; */

    font-family: "San Francisco";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.05469rem;
    color: #ffffff;

    transform: translateX(${(props) => props.position}rem);
    transition: transform 0.2s ease;

    box-shadow: 0 0 0px #ff0000, 0 0 0px #ff2525c7, 0 0 0px #ff2222, 0 0 0px #ff1919,
    0 0 5px #ff2020, 0 0 7px #ff3232;
`

export function SubmitButton({buttonState, buttonMessage}) {
    const [buttonPosition, setButtonPosition] = useState(0);
    const [buttonHovering, setButtonHovering] = useState(false)

    function handleHover() {
        console.log(buttonPosition);
        if(buttonPosition == 0)
            setButtonPosition(1);
        else 
            setButtonPosition(-1 * buttonPosition);
    }
    return (
        <>
        {
            buttonState ? (
                <>
                {/* <Image src="/src/resource/image/nyan-cat.gif"/> */}
                <AvailableButton>{buttonMessage}</AvailableButton>
                </>
             ) :
                <NotAvailableButton onMouseEnter={handleHover} position={20 * buttonPosition}>Can't {buttonMessage}</NotAvailableButton>
        }
        </>
    );
}