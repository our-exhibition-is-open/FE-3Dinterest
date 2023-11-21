import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const AvailableButton = styled.button`
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
`

const Image = styled.img`
    object-fit: cover;
`

export const NotAvailableButton = styled.button`
    z-index: 10;
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
    transform: translateX(${(props) => props.position}rem);
    transition: transform 0.2s ease;
`

export function SubmitButton({buttonState}) {
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
                <AvailableButton>Sign up</AvailableButton>
                </>
             ) :
                <NotAvailableButton onMouseEnter={handleHover} position={20 * buttonPosition}>Can't Sign up</NotAvailableButton>
        }
        </>
    );
}