import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { InputComponent } from "../component/common/InputComponent";
import { checkingSubmitValue, checkingValue} from "../util/registerUtil/checkingValue";
import {BackgroundContainer, MainBackground } from "../component/threejsComponent/MainBackground";
import { SubmitButton } from "../component/common/SubmitButton";
import LogoComponent from "../component/common/LogoComponent";
import { registerUser } from "../util/registerUtil/registerUser";

const CommonText = styled.div`
    z-index: 1;
    text-align: center;

    margin-top: 10%;

    width: 29rem;
    color: #000000;
    font-family: "San Francisco";
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.05469rem;

    text-shadow: 0 0 7px #000000, 0 0 10px #000000, 0 0 21px #000000, 0 0 42px #000000,
    0 0 82px #000000, 0 0 92px #000000, 0 0 102#000000fa, 0 0 151#0000004a;

    /* backdrop-filter: brightness(300%) blur(8.5px); */

    
`


const GoToSignIn = styled(CommonText)`
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1%;
`


const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 10%;
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
        if(registerUser(value.id, value.pw))
        {
            alert("회원가입 성공 ! 로그인을 해주세요.");
            navigate('/login');
        }
        else
        {
            alert("중복된 아이디입니다.");
        }
    }

    return (
        <>
        <BodyContainer>
            <BackgroundContainer>
                <MainBackground/>
            </BackgroundContainer>
            
            <LogoComponent/>
            
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
                    <SubmitButton buttonState={buttonState} buttonMessage={"Sign up"}/>
                    </ContentsContainer>
                </form>
                <GoToSignIn><Link to={'/login'} style={{ color: "black"}}>Have an account?</Link></GoToSignIn>
        </BodyContainer>
        </>
    )
}


