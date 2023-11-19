import React, { useState } from "react";
import styled from "styled-components";
import { InputComponent } from "../component/common/InputComponent";
import { InputComponent2 } from "../component/common/InputComponent2";

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    width: 20rem;
    height: 100%;
    gap: 3rem;
`

const PasswordContainer = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
`

export function RegisterPage() {
    const [submitStatus, setsubmitStatus] = useState(false);
    const [isIdProper, setIsIdProper] = useState(false);

    const [value, setValue] = useState({id: "", pw: "", pwValid: "", email: ""});
    const [properCount, setProperCount] = useState(0);
    

    function onChangeValue(value) {
        setValue(value);
    }
    function onChangeProper() {

    }

    return (
        <>
        <BodyContainer>
            <ContentsContainer>
                <form> 
                    <InputComponent2 inputType="text" type="id" onChangeValue={onChangeValue}  value={value} placeholder="id를 입력하세요"/>
                    <InputComponent2 inputType="password" type="pw" onChangeValue={onChangeValue}  value={value} placeholder="password를 입력하세요"/>
                    <InputComponent2 inputType="password" type="pwValid" onChangeValue={onChangeValue}  value={value} placeholder="password 재확인"/>
                    <InputComponent inputType="text" type="email" onChangeValue={onChangeValue}  value={value} placeholder="email를 입력하세요"/>
                </form>
            </ContentsContainer>
        </BodyContainer>
        </>
    )
}



const handlingOnChangeValue2 = (e, checkingExp) => {
    const currentValue = e.target.value;
    setValue(currentValue);



    if(!checkingExp.test(currentValue))
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
