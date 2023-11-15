import React from "react";
import styled from "styled-components";
import { InputComponent } from "../component/common/InputComponent";

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

export function RegisterPage() {
    return (
        <>
        <BodyContainer>
            <ContentsContainer>
                <InputComponent inputType="id" checkingExp={/^[a-zA-z0-9]{4,12}$/} checkingFunc = {(v) => {return 1;}}/>
                <InputComponent inputType="password" checkingExp={/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/} checkingFunc = {(v) => {return 1;}}/>
            </ContentsContainer>
        </BodyContainer>
        </>
    )
}