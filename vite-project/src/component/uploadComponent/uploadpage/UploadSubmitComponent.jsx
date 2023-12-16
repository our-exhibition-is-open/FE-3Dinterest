import React from "react";
import styled from "styled-components";



const SubmitButton = styled.button`
  cursor: pointer;
  border-radius: 2rem;
  width: 17%;
  height: 3.3rem;
  border: 0;
  background-color: red;

  color: #ffffff;
  font-family: "San Francisco";
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.06625rem;

  &:hover {
    background-color: #9b0000;
  }
`;

export function UploadSubmitComponent({api}) {
  function handleClick() {
    api();
  }

  return (
    <>
      <SubmitButton onClick={handleClick}>Upload</SubmitButton>
    </>
  );
}
