import React from "react";
import styled from "styled-components";
import { UploadInputComponent } from "../uploadpage/UploadInputComponent";
import { UploadSubmitComponent } from "../uploadpage/UploadSubmitComponent";
import { useUploadStore } from "../../../model";
import { ContributeComponent } from "./ContributeComponent";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100%;
  background-color: rebeccapurple;
  padding-top: 17%; 
  gap: 3rem;
`;

//FIXME: 컨트리뷰트 컴포넌트 추가할 예정
export function UploadComponent() {
  return (
    <InputContainer>
      <UploadInputComponent/>
      <ContributeComponent/>
      <UploadSubmitComponent/>
    </InputContainer>
  );
}
