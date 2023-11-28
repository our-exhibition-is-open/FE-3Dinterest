import React, { useState } from "react";
import { styled } from "styled-components";
import { Button, ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 30px;
  padding: 20px 35px 9px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;

  background: #ffffffc1;
  backdrop-filter: blur(10px);

  border-style: solid;
  border-bottom-width: 2px;
  border-top:0px;
  border-left: 0px;
  border-right: 0px;
  /* border-bottom: 0px; */
  border-color: red;

  box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.376);
`;

const LogoContainer = styled.div`
  background: linear-gradient(to right, #cf0000 14%, #0000ff 77%, #000000 95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-right: 70%;
  font-size: 17px;
  font-family: "SF-Pro-Rounded-Regular";
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export function NavigationBar(props) {
  return (
    <>
      <Header>
        
          <LogoContainer>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              3Dinterest
            </Link>
          </LogoContainer>
        

        {props.isLogged ? (
          <Button onClick={props.handleLogOut}>Logout</Button>
        ) : (
          <ButtonComponent buttonName="Login" route="/login" />
        )}

        <ButtonComponent buttonName="Sign Up" route="/register" />
        {props.isLogged ? (
          <>
            <ButtonComponent buttonName="Upload" route="/upload" />
            <ButtonComponent buttonName="Contribute" route="/contribute" />
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                alert("로그인 먼저 해주세요.");
              }}
            >
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                Upload
              </Link>
            </Button>
            <Button onClick={() => alert("로그인 먼저 해주세요.")}>
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                Contribute
              </Link>
            </Button>
          </>
        )}
      </Header>
    </>
  );
}
