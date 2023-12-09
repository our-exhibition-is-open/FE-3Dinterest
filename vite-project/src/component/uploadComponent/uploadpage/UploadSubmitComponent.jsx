import React from "react";
import styled from "styled-components";
import { useUploadStore } from "../../../model";
import { postUploadApi } from "../../../api/postUploadApi";
import { getCurrentTime } from "../../../util/uploadUtil/getCurrentTime";
import { useNavigate } from "react-router-dom";

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

export function UploadSubmitComponent() {
  const navigator = useNavigate();
  
  function handleClick() {
    const { uploadState, file, thumbnailImage, title, userId } = useUploadStore();
    if (uploadState == true) {
      postUploadApi(file, thumbnailImage, title, userId)
      //FIXME: uplaodTime 제외하기.
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
    <>
      <SubmitButton onClick={handleClick}>Upload</SubmitButton>
    </>
  );
}
