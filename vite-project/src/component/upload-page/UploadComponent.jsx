import React from "react";
import styled from "styled-components";
import { useUploadImageStore } from "../../model/userStore";
import { InputComponent } from "../common/InputComponent";
import { SubmitButton } from "../common/SubmitButton";
import { UploadInputComponent } from "./UploadInputComponent";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 45rem;
  margin-top: 7%;
  padding-top: 20%;
  gap: 3rem;
`;


export function UploadComponent() {
  const { image } = useUploadImageStore();

  return (
    <InputContainer>
      <UploadInputComponent/>
      
    </InputContainer>
  );
}
