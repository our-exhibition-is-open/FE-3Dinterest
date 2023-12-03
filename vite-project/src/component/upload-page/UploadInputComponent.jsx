import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGageLevelStore, useUploadStore } from "../../model";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 7px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "SF-Pro-Rounded-Regular";
  font-size: 0.85rem;
  font-weight: 200;
  letter-spacing: 0.02625rem;

  padding-left: 4px;
`;

export const InputStyled = styled.input`
  border-radius: 1rem;
  border-style: solid;
  border-width: 2px;
  border-color: #c2c2c2;

  width: 100%;
  height: 3rem;
  padding-left: 1rem;
`;

export function UploadInputComponent() {
  const { setTitle, title, file } = useUploadStore();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  //FIXME: 그냥 경우의 수가 적으니 귀찮으니깐 경우의 수 별로 상태를 string으로 정의하자. 아니면 파일이 먼저 들어오지 않으면 인풋은 못넣게 하자.
  return (
    <>
      <Container>
        <Title>Title</Title>
        <InputStyled
          placeholder="Add a title"
          onChange={(e) => handleChange(e)}
        />
      </Container>
    </>
  );
}
