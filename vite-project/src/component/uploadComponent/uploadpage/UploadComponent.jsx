import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UploadInputComponent } from "./UploadInputComponent";
import { UploadSubmitComponent } from "./UploadSubmitComponent";
import { useLoadedModel, useUploadStore } from "../../../model";
import { postUploadApi } from "../../../api/postUploadApi";
import { UploadModel } from "../../../model/upload.model";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 100%;

  padding-top: 22%; 
  gap: 3rem;
`;

export function UploadComponent() {
  const navigator = useNavigate();
  const { uploadState, thumbnailImage, title, userId } = useUploadStore();
  const {file} = useLoadedModel();

  function handleUpload() {
    if (uploadState == true) {
      postUploadApi(file, thumbnailImage, new UploadModel(title, userId))
        .then((response) => {
          if (response.status == 200) {
            alert("Success!");
            navigator("/");
          } else {
            alert(
              "뭔가 문제가 생겼음, 에러 코드에 따른 예외처리는 하지 않음, upload api 명세를 다시 확인해보고 어떤 에러인지 확인해보시길"
            );
            navigator("/upload");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (uploadState == false) {
      alert("파일 또는 제목을 먼저 입력하세요.");
    }
  }

  return (
    <InputContainer>
      <UploadInputComponent/>
      <UploadSubmitComponent api={handleUpload}/>
    </InputContainer>
  );
}

