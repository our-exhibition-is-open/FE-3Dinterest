import React, { useState } from "react";
import styled from "styled-components";
import { UploadInputComponent } from "../uploadpage/UploadInputComponent";
import { UploadSubmitComponent } from "../uploadpage/UploadSubmitComponent";
import {
  useDownloadHistory,
  useLoadedModel,
  useUploadStore,
} from "../../../model";
import { ContributeListComponent } from "./ContributeListComponent";
import { useNavigate } from "react-router-dom";
import { postContributeApi } from "../../../api/postContributeApi";
import { postUploadApi } from "../../../api/postUploadApi";
import { UploadModel } from '../../../model/upload.model';

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
  const navigator = useNavigate();
  const { uploadState, thumbnailImage, title, userId } = useUploadStore();
  const { file } = useLoadedModel();
  const { clickedPost } = useDownloadHistory();
  function handleContribute() {
    if (uploadState && clickedPost) {
      postUploadApi(file, thumbnailImage, new UploadModel(title, userId))
        .then((response) => {
          console.log(typeof response.data)
          const uploadPostId = response.data;
          console.log(uploadPostId)
          postContributeApi(uploadPostId,clickedPost)
            .then((response) => {
              console.log(response)
              if (response == 200) {
                alert("업로드 성공 !");
                navigator("/");
              } else {
                alert("컨트리뷰트 api 통신 중 서버 오류. 다시 시도해 주세요");
              }
            })
            .catch((e) => {
              console.error("contribute record api error : ", e);
              alert("컨트리뷰트 api 통신 중 서버 오류. 다시 시도해 주세요");
            });
        })
        .catch((e) => {
          console.error("upload api error : ", e);
          alert("서버 통신 중 에러 발생. upload api error");
        });
    } else {
      alert("파일과 제목 그리고 다운로드 기록을 선택해주세요.");
      navigator("/contribute");
    }
  }

  return (
    <Container>
      <UploadInputComponent />
      <ContributeListComponent />
      <UploadSubmitComponent api={handleContribute} />
    </Container>
  );
}
