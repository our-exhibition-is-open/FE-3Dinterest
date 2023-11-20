import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { checkingSubmitValue } from "../../util/register/checkingValue";

const MoveButton = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const AvailableButton = styled.button`
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
`

export const NotAvailableButton = styled.button`
    z-index: 10;
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
    ${(props) => props.active && `
     animation: ${MoveButton} 2s 1s infinite linear alternate;   
    `}
`

export function SubmitButton({properCount, buttonState}) {
    console.log(buttonState);
    return (
        <>
        {
            buttonState ?
                <NotAvailableButton>
                    <Link to="/" style={{ color: "black",textDecoration: "none"}}>Sign up</Link>
                </NotAvailableButton> :
                <NotAvailableButton>no Sign up</NotAvailableButton>
        }
        </>
    );
}