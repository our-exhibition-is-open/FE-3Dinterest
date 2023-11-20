import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { checkingValue } from "../../util/register/checkingValue";

const MoveButton = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Button = styled.button`
    height: 2rem;
    width: 100%;
    background:#ffffff59;
    backdrop-filter: blur(10px);
    border-radius: 0.4rem;
    ${(props) => props.active && `
     animation: ${MoveButton} 2s 1s infinite linear alternate;   
    `}
`


const Message = styled.div`
    color: #000000;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;
`

const MessageContainer = styled.div`
    position: absolute;
    top: 13px;
    right: 1%;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background:#ffffff59;
    
    backdrop-filter: blur(10px);
`

const InputContainer = styled.div`
    width: 268px;   
    height: 38px;
    justify-content: center;
    position: relative;
`

export function InputComponent({inputType, type, onChangeValue, value, properCount, placeholder}) {
    const [messageState, setMessageState] = useState(false);
    function updateValue(e) {
        value[type] = e.target.value;
        onChangeValue(value, properCount, type);
        setMessageState(properCount[type]);
    }

    return (
        <>
        <InputContainer>
            <Input type={inputType} placeholder={placeholder} onChange={(e) => updateValue(e)}/>
            <MessageContainer>
                {messageState && 
                    <Message>굿</Message>
                }
            </MessageContainer>
        </InputContainer>
        </>
    )
}