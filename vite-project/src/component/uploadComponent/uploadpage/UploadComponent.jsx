import React from "react";
import styled from "styled-components";
import { UploadInputComponent } from "./UploadInputComponent";
import { UploadSubmitComponent } from "./UploadSubmitComponent";
import { useUploadStore } from "../../../model";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100%;

  padding-top: 22%; 
  gap: 3rem;
`;

export function UploadComponent() {
  return (
    <InputContainer>
      <UploadInputComponent/>
      <UploadSubmitComponent/>
    </InputContainer>
  );
}

