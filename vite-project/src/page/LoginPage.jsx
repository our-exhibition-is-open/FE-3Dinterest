import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { InputComponent } from "../component/common/InputComponent";
import {
  checkingSubmitValue,
  checkingValue,
} from "../util/registerUtil/checkingValue";
import {
  BackgroundContainer,
  MainBackground,
} from "../component/threejsComponent/MainBackground";
import { SubmitButton } from "../component/common/SubmitButton";
import LogoComponent from "../component/common/LogoComponent";

const CommonText = styled.div`
  z-index: 1;
  text-align: center;

  margin-top: 10%;

  width: 29rem;
  color: #000000;
  font-family: "San Francisco";
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05469rem;

  text-shadow: 0 0 7px #000000, 0 0 10px #000000, 0 0 21px #000000,
    0 0 42px #000000, 0 0 82px #000000, 0 0 92px #000000, 0 0 102#000000fa,
    0 0 151#0000004a;

  /* backdrop-filter: brightness(300%) blur(8.5px); */
`;

const GoToSignIn = styled(CommonText)`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15%;
  width: 100%;
  height: 100%;
  gap: 0.8rem;
`;

export function LoginPage({ setLoginSuccess }) {
  const [value, setValue] = useState({
    id: "",
    pw: "",
    pwValid: "",
    email: "",
  });
  const [properCount, setProperCount] = useState({
    id: false,
    pw: false,
    pwValid: false,
    email: false,
  });
  const [buttonState, setButtonState] = useState(false);


  const navigate = useNavigate();

  function onChangeValue(value, properCount, type) {
    setValue(value);
    properCount[type] = checkingValue(value, type) ? true : false;
    setProperCount(properCount);
    properCount["pwValid"] = true;
    properCount["email"] = true;
    setButtonState(checkingSubmitValue(properCount));
  }

  function handlingSubmit() {
    sessionStorage.setItem("userId", value.id);
    sessionStorage.setItem("isLoggedIn", true);
    navigate("/");
  }

  

  return (
    <>
      <BodyContainer>
        <BackgroundContainer>
          <MainBackground />
        </BackgroundContainer>

        <LogoComponent/>

        <form onSubmit={handlingSubmit}>
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
            <SubmitButton buttonState={buttonState} buttonMessage={"Sign In"} />
          </ContentsContainer>
        </form>
        <GoToSignIn>
          <Link to={"/register"} style={{ color: "black" }}>
            Don't you have an account?
          </Link>
        </GoToSignIn>
      </BodyContainer>
    </>
  );
}
