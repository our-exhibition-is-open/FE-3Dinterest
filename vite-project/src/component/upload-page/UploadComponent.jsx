import React from "react";
import styled from "styled-components";
import { useUploadImageStore } from "../../model/userStore";

const InputContainer = styled.div`
  width: 35rem;
  height: 45rem;
  margin-top: 7%;

  background-color: aliceblue;
`;

export function UploadComponent() {
  const { image } = useUploadImageStore();

  return (
    <InputContainer>
      <img src={image} />
    </InputContainer>
  );
}
