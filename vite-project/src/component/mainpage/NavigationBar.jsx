import React from "react";

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
        
    }
    return(
        <div onClick={handleClick}>
            로그인
        </div>
    )
}

function UploadButton() {

}

function ContributeButton() {

}
