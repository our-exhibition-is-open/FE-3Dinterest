import React from "react";
import styled from "styled-components";
import { UploadInputComponent } from "../uploadpage/UploadInputComponent";
import { UploadSubmitComponent } from "../uploadpage/UploadSubmitComponent";
import { useUploadStore } from "../../../model";
import { ContributeListComponent } from "./ContributeListComponent";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100%;
  padding-top: 15%; 
  gap: 1rem;
`;

//FIXME: 컨트리뷰트 컴포넌트 추가할 예정
export function ContributeComponent() {
  
  function handleContribute() {

  }

  return (
    <Container>
      <UploadInputComponent/>
      <ContributeListComponent/>
      <UploadSubmitComponent api={handleContribute}/>
    </Container>
  );
}
