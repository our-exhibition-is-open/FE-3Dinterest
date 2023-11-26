import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { checkingSubmitValue, checkingValue } from "../../util/register/checkingValue";

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
    border: none;
    border-radius: 0.4rem;
    background: rgba(191, 191, 191, 0.329);
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: brightness(300%) blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);

    padding-left: 3%;
    
    box-shadow: 0 0 1px #ffffff, 0 0 3px #ffffff;
    
    &:focus {
        outline: 0;
    }
    ::placeholder-shown {
        margin-left: 10%;
    }
`

const InputContainer = styled.div`
    width: 280px;   
    height: 42px;
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