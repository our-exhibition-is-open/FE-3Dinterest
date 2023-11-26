import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeComponentH1 = styled.h1`
  z-index: 2;
  margin: 0 auto;
  margin-top: 8rem;

  width: 26.062rem;
  height: 100%;
  /* 
    background: radial-gradient(circle farthest-corner at top center, #CF0000 1%, #000000 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */

  font-family: "San Francisco";
  font-size: 2.5rem;
  text-align: center;

  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.2rem;
`;

const WelcomeComponentH2 = styled.div`
  z-index: 1;
  margin-top: 0%;
  margin-left: 0.6%;
  height: 2.1875rem;
  flex-shrink: 0;

  font-family: "San Francisco";
  font-size: 1.7rem;
  font-weight: 600;

  letter-spacing: 0.15rem;
`;

const WelcomeComponentH3 = styled.div`
  margin-top: 4%;
  margin-bottom: 0.2%;
  font-size: 0.8rem;

  z-index: 1;
  height: 2.1875rem;
  flex-shrink: 0;

  font-family: "San Francisco";
  font-weight: 600;

  letter-spacing: 0.1rem;
`;

export function WelcomeHeader(props) {

  return (
    <>
      <Container>
        {props.isLogged ? (
          <>
            <WelcomeComponentH1>안녕하세요</WelcomeComponentH1>
            <WelcomeComponentH2>{props.userName} 님.</WelcomeComponentH2>
          </>
        ) : (
          <>
            <WelcomeComponentH1>3Dinterest</WelcomeComponentH1>
            <WelcomeComponentH3>로그인 해주세요.</WelcomeComponentH3>
          </>
        )}
      </Container>
    </>
  );
}
