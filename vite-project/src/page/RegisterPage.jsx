import React, { useState } from "react";
import styled from "styled-components";
import { InputComponent } from "../component/common/InputComponent";
import { checkingValue } from "../util/register/checkingValue";
import { events } from "@react-three/fiber";

const Button = styled.button`
    width: 100%;
`

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 50%;
    width: 100%;
    height: 100%;
    gap: 1rem;
`

export function RegisterPage() {
    const [value, setValue] = useState({id: "", pw: "", pwValid: "", email: ""});
    const [properCount, setProperCount] = useState({id: false, pw: false, pwValid: false, email: false});

    function onChangeValue(value, properCount, type) {
        setValue(value);
        properCount[type] = checkingValue(value, type) ? true : false;
        setProperCount(properCount);
    }
    function handlingSubmit(properCount) {
        if(properCount["id"] == true && properCount["pw"] == true && properCount["pwValid"] == true && properCount["email"] == true)
        {
            alert("good");
        }
        else
        {
            alert("no");
        }
    }
    return (
        <>
        <BodyContainer>
            
                <form onSubmit={() => handlingSubmit(properCount)}> 
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
                    <Button formAction="">회원가입</Button>
                    </ContentsContainer>
                </form>
        </BodyContainer>
        </>
    )
}


