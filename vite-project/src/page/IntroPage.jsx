import React, { useRef, useState } from "react";
import styled from "styled-components";
import { LoginPage } from "./LoginPage";

export function IntroPage() {
    const [isLoginSuccess, setLoginSuccess] = useState(false);
    return (
        <>
        <LoginPage  setLoginSuccess={setLoginSuccess}/>
        </>
    )
}