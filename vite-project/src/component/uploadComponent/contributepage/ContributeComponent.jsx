import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: start;
  visibility: hidden;

  width: 100%;
  height: 4rem;
  background-color: #000000;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export function ContributeComponent() {
  return (
    <>
      <Container>
        
      </Container>
    </>
  );
}
