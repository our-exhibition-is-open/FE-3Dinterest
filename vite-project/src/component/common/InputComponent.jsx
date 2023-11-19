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
    justify-content: center;
    /* background: #D9D9D9; */
`

const Input = styled.input`
    width: 268px;
    height: 38px;
    background: #D9D9D9;
`

export function InputComponent(props) {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");
    const [isProper, setIsProper] = useState(false);
    
    const inputType = props.inputType;
    const checkingExp = props.checkingExp ?? null;
    const checkingFunc = props.checkingFunc ?? null;

    const handleonChangeValue2 = props.handleOnChange;
    // console.log(checkingExp);

    // function handlingOnChangeValue(e) {
    //     const currentValue = e.target.value;
    //     setValue(currentValue);
    //     if(!checkingExp.test(currentValue) && checkingFunc(currentValue))
    //     {
    //         setMessage("다시 입력하세요");
    //         setIsProper(false);
    //     }
    //     else
    //     {
    //         setMessage("굿");
    //         setIsProper(true);
    //     }
    // }

    return (
        <>
        <InputContainer>
            <Input type={inputType} value={value} onChange={(e) => handleonChangeValue2(e, checkingExp, checkingExp)}>
            </Input>
        </InputContainer>
            <Message>{message}</Message>
        </>
    )
}