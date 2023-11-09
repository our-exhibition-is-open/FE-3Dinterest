import React from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export default function NavigationBar() {
    return (
        <div>
            <LoginButton />
            <UploadButton />
            <ContributeButton />
        </div> 
    )
}

function LoginButton() {
    
    function handleClick() {
        navigate('/loginpage');
    }
    
    return(
        <div onClick={handleClick}>
            로그인
        </div>
    );
}

function UploadButton() {
    
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

    function handleClick() {
        navigate('/contributepage');
    }
    
    return(
        <div onClick={handleClick}>
            컨트리뷰트
        </div>
    );
}
