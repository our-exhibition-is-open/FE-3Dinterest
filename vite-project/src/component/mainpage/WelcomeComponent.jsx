import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WelcomeComponentH1 = styled.h1`
    margin: 0 auto;
    margin-top: 4.56rem;

    width: 26.0625rem;
    height: 2.1rem;

    color: #000;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 1.875rem;
    text-align: center;

    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.06563rem;
`
const WelcomeComponentH2 = styled(WelcomeComponentH1)`
    margin-top: 0.5%;
    
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 1.25rem;
`

const WelcomeComponentH3 = styled(WelcomeComponentH1)`
    margin-top: 1%;
    margin-bottom: 1%;
    font-size: 0.75rem;
`

export function WelcomeHeader(props){
    return (
        <>
        <Container>
            <WelcomeComponentH1>{props.userName}의</WelcomeComponentH1>
            <WelcomeComponentH2>3Dinterest</WelcomeComponentH2>
            <WelcomeComponentH3>{props.modelCount}개 저장됨</WelcomeComponentH3>
        </Container>
        </>
    )
}