import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const Header = styled.header`
        display: flex;
        height: 30px;
        padding: 20px 20px 9px;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 10px;
    
        background-color: #ffffff;
        box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.25);
    `;

const Button = styled.h1`
    cursor: pointer;

    width: 70px;
    height: 28px;
    display: inline-block; 
    position: relative;

    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    font-family: "SF-Pro-Rounded-Regular";

    &:after {
        content: "";
        display: block;
        width: 100%; height: 2px;
        background: #000;
        transition: all 0.1s;
    }
    &:after {
        transform: scaleX(0);
    }
    &:hover:after {
        transform: scaleX(0.8);
    }

`;


export function NavigationBar() {
    return (
        <Header>
            <LoginButton />
            <UploadButton />
            <ContributeButton />
        </Header>
    )
}

function LoginButton() {
    const [hoverBool, setHoverBool] = useState(false);
    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/loginpage');
    }

    function handleHovering() {
        setHoverBool()
    }
    
    return(
        <Button onClick={handleClick}>
            로그인
        </Button>
    );
}

function UploadButton() {
    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/uploadpage');
    }

    return(
        <Button onClick={handleClick}>
            업로드
        </Button>
    );
}

function ContributeButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/contributepage');
    }
    
    return(
        <Button onClick={handleClick}>
            컨트리뷰트
        </Button>
    );
}
