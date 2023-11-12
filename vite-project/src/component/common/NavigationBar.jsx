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

`

function ButtonComponent(props) {
    const navigate = useNavigate();
    const buttonName = props.buttonName;
    const route = props.route;
    
    function handleClick() {
        navigate(route);
    }

    return(
        <Button onClick={handleClick}>
            {buttonName}
        </Button>
    );
}

export function NavigationBar() {
    return (
        <Header>
            <ButtonComponent route="/loginpage" buttonName="로그인"/>
            <ButtonComponent route="/loginpage" buttonName="업로드"/>
            <ButtonComponent route="/loginpage" buttonName="컨트리뷰트"/>
        </Header>
    )
}
