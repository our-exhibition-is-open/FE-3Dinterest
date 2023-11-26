import React, { useState } from "react";

import { styled } from "styled-components";

import { Button, ButtonComponent } from "./ButtonComponent";
import { Link } from "react-router-dom";
import { useUserStore } from "../../model/userStore";

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  display: flex;
  height: 30px;
  padding: 20px 20px 9px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;

  background: #ffffff3d;
  backdrop-filter: blur(10px);

  box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.376);
`;

export function NavigationBar(props) {

  return (
    <>
      <Header>
        <div>
          {props.isLogged ? (
            <Button onClick={props.handleLogOut}>로그아웃</Button>
          ) : (
            <ButtonComponent buttonName="로그인" route="/login" />
          )}
        </div>
        <Button>
          <Link
            to="/register"
            style={{ color: "black", textDecoration: "none" }}
          >
            회원가입
          </Link>
        </Button>
        <div>
          <ButtonComponent buttonName="업로드" route="/upload" />
        </div>
      </Header>
    </>
  );
}
