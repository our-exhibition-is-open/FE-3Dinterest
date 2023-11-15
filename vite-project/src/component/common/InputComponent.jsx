import React, { useState } from "react";
import styled from "styled-components";


const Message = styled.div`
    justify-self: left;
    margin-top: 0.4rem;

    color: #000000;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;
`

const InputContainer = styled.div`
    width: 20rem;
`

export function InputComponent(props) {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [isProper, setIsProper] = useState(false);
    // const [inputType, setInputType] = useState("");
    // const [checkingExp, setChckingExp] = useState("");
    const inputType = props.inputType;
    const checkingExp = props.checkingExp;
    const checkingFunc = props.checkingFunc;
    // console.log(checkingExp);

    function handlingOnChangeValue(e) {
        const currentValue = e.target.value;
        setValue(currentValue);
        if(!checkingExp.test(currentValue) && checkingFunc(currentValue))
        {
            setMessage("다시 입력하세요");
            setIsProper(false);
        }
        else
        {
            setMessage("굿");
            setIsProper(true);
        }
    }

    return (
        <>
        <InputContainer>
            <input type={inputType} value={value} onChange={(e) => handlingOnChangeValue(e)}>
            </input>
            <Message>{message}</Message>
        </InputContainer>
        </>
    )
}