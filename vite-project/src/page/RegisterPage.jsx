import React, { useRef, useState } from "react";
import styled from "styled-components";

import { InputComponent } from "../component/common/InputComponent";
import { checkingSubmitValue, checkingValue} from "../util/register/checkingValue";
import {BackgroundContainer, MainBackground } from "../component/threejs/MainBackground";
import { SubmitButton } from "../component/common/SubmitButton";
import { useNavigate } from "react-router-dom";


const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 60%;
    width: 100%;
    height: 100%;
    gap: 0.8rem;
`

export function RegisterPage() {
    const [value, setValue] = useState({id: "", pw: "", pwValid: "", email: ""});
    const [properCount, setProperCount] = useState({id: false, pw: false, pwValid: false, email: false});
    const [buttonState, setButtonState] = useState(false);

    const navigate = useNavigate();


    function onChangeValue(value, properCount, type) {
        setValue(value);
        properCount[type] = checkingValue(value, type) ? true : false;
        setProperCount(properCount);
        setButtonState(checkingSubmitValue(properCount));
        console.log(properCount);
    }

    function handlingSubmit() {
        navigate('/');
    }


    return (
        <>
        <BackgroundContainer>
            <MainBackground/>
        </BackgroundContainer>
        <BodyContainer>
                <form onSubmit={handlingSubmit}> 
                <ContentsContainer>
                    <InputComponent 
                        inputType="text"
                        type="id"
                        onChangeValue={onChangeValue}
                        value={value} 
                        properCount={properCount} 
                        placeholder="id"
                    />
                    <InputComponent 
                        inputType="password" 
                        type="pw" 
                        onChangeValue={onChangeValue}  
                        value={value} 
                        properCount={properCount} 
                        placeholder="password"
                    />
                    <InputComponent 
                        inputType="password" 
                        type="pwValid" 
                        onChangeValue={onChangeValue}
                        value={value} 
                        properCount={properCount} 
                        placeholder="password confirm"
                    />
                    <InputComponent 
                        inputType="text" 
                        type="email" 
                        onChangeValue={onChangeValue}
                        value={value} 
                        properCount={properCount} 
                        placeholder="email"
                    />
                    <SubmitButton buttonState={true}/>
                    </ContentsContainer>
                </form>
        </BodyContainer>
        </>
    )
}


