import React from "react";

import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';


export const Button = styled.h1`
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
    font-weight: 100;
    line-height: normal;

    font-family: "SF-Pro-Rounded-Regular";

    &:after {
        content: "";
        display: block;
        width: 100%; height: 1px;
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

export function ButtonComponent(props) {
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