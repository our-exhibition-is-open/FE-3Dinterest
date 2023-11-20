import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { InputComponent, notAvailableButton } from "../component/common/InputComponent";
import { checkingValue, checkingSubmitValue } from "../util/register/checkingValue";
import {BackgroundContainer, MainBackground } from "../component/threejs/MainBackground";


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
    gap: 1rem;
`

export function RegisterPage() {
    const [value, setValue] = useState({id: "", pw: "", pwValid: "", email: ""});
    const [properCount, setProperCount] = useState({id: false, pw: false, pwValid: false, email: false});
    const buttonAvailable = useRef(false);


    function onChangeValue(value, properCount, type) {
        setValue(value);
        properCount[type] = checkingValue(value, type) ? true : false;
        setProperCount(properCount);

        console.log(properCount);
        
        if(checkingSubmitValue(properCount)) {
            buttonAvailable.current = true;
            const rootElement = document.getElementById("bodyContainer");
            const buttonElement = (
                <notAvailableButton formAction="">
                    <Link to="/" style={{ color: "black",textDecoration: "none"}}>Sign up</Link>
                </notAvailableButton>
            )
        } else {
            buttonAvailable.current = false;
        }
    }


    return (
        <>
        <BackgroundContainer>
            <MainBackground/>
        </BackgroundContainer>
        <BodyContainer id="bodyContainer">
            
                <form> 
                { buttonAvailable && <div>test</div>}
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
                    {/* <Button id="registerButton" formAction="">Sign up</Button> */}
                    </ContentsContainer>
                </form>
        </BodyContainer>
        </>
    )
}


