import React, { useState } from "react";
import styled from "styled-components";
import { checkingValue } from "../../util/register/checkingValue";

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

const Input = styled.input`
    width: 268px;
    height: 38px;
    background: #D9D9D9;
`

const InputContainer = styled.div`
    justify-content: center;
    justify-items: left;
`

export function InputComponent2({inputType, type, onChangeValue, value, placeholder}) {
    const [isProper, setIsProper] = useState(false)

    function updateValue(e) {
        value[type] = e.target.value;
        console.log(value);
        onChangeValue(value);
        if(checkingValue(value, type))
        {
            setIsProper(true);
            
        }
    }

    //true 일 때 마다 카운트 세기 상위 컴포넌트에서 카운트 스테이트 나중에 추가하기.

    return (
        <>
        <InputContainer>
            <Input type={inputType} placeholder={placeholder} onChange={(e) => updateValue(e)}/>
            { 
                <div>{isProper ? <Message>굿</Message> : <Message>노굿</Message>}</div>
            }
        </InputContainer>
        </>
    )
}