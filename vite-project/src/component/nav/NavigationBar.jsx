import React, { useState } from "react";

import { styled } from "styled-components";

import { Button, ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";
import { useUserStore } from "../../model/userStore";
import LogoComponent from "../common/LogoComponent";

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  display: flex;
  height: 30px;
  padding: 20px 35px 9px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;

  background: #ffffff3d;
  backdrop-filter: blur(10px);

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
        {props.isLogged && (
          <LogoContainer>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              3Dinterest
            </Link>
          </LogoContainer>
        )}
        <div>
          {props.isLogged ? (
            <Button onClick={props.handleLogOut}>로그아웃</Button>
          ) : (
            <ButtonComponent buttonName="Login" route="/login" />
          )}
        </div>
        <Button>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </Button>
        <div>
          <ButtonComponent buttonName="Upload" route="/upload" />
        </div>
        <div>
          <ButtonComponent buttonName="Contribute" route="/Contribute" />
        </div>
      </Header>
    </>
  );
}
