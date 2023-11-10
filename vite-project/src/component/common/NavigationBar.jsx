import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const Header = styled.header`
        display: flex;
        height: 30px;
        padding: 15px 14px;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 10px;
    
        background-color: #ffffff;
        box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.25);
    `;

const Button = styled.div`
    width: 65px;
    height: 28px;

    color: #000;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/loginpage');
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
        <div onClick={handleClick}>
            업로드
        </div>
    );
}

function ContributeButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/contributepage');
    }
    
    return(
        <div onClick={handleClick}>
            컨트리뷰트
        </div>
    );
}
