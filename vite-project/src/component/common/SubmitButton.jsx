import React, { useState } from "react";
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

export const availableButton = styled.button`
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
    ${(props) => props.active && `
     animation: ${MoveButton} 2s 1s infinite linear alternate;   
    `}
`

export const notAvailableButton = styled.button`
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
`

export function SubmitButton({properCount}) {
    const buttonAvailable = checkingSubmitValue(properCount);
    return (
        <>
        {
            buttonAvailable ?
                <availableButton>Sign up</availableButton> :
                <notAvailableButton>no Sign up</notAvailableButton>
        }
        </>
    )
}