import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MoonLoader from "react-spinners/MoonLoader";
import HashLoader from "react-spinners/HashLoader";
import { getPostListApi } from "../../../api/getPostListApi";

import { PostModel, useLoadedModel } from "../../../model";
import { ContributePost } from "./ContributePost";
import { UploadScene } from "../../threejsComponent/UploadScene";
import { getContributeListApi } from "../../../api/getContributeListApi";
import { LikeComponent } from "../../common/LikeComponent";
import { getModelFileApi } from "../../../test/getModelFileApi";
import { LoadingComponent } from "../../common/LoadingComponent";

export const ModalBackground = styled.div`
  display: flex;
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* justify-content: center;
    align-items: center; */
  background: #0000002e;

  backdrop-filter: blur(6px);
`;

//TODO: 나중에 레이아웃 변경하기, 자꾸 모달을 선택하면 뒷배경의 클릭 리스너가 실행됨
//그래서 일단 임시적으로 뒷배경과 모달을 분리했음(자식 조상 끊음) -> 선택이 되지 않는 대신, 레이아웃 조깥아짐
const ModalContainer = styled.div`
  display: flex;
  z-index: 1001;
  flex-direction: row;
  width: 55.6875rem;
  height: 36rem;
  justify-self: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 1.4rem;
  padding-right: 6.7px;
  border-radius: 26px;
  background: #fff;
`;

const ModalPostContainer = styled.div`
  display: flex;
  z-index: 1002;
  flex-direction: column;
  align-items: flex-start;
  height: 41.875rem;
  width: 40.745rem;
`;

const PostCanvas = styled.div`
  z-index: 1002;
  width: 39.375rem;
  height: 28.3rem;
  flex-shrink: 0;
  margin-left: 1.37rem;
  display: flex;
  align-items: center;

  /* border-style: solid;
  border-radius: 26px;
  border-width: 2px;
  border-color: "#9f9f9f"; */
`;

const Title = styled.div`
  width: 29rem;
  height: 1.9375rem;
  color: #000;
  font-family: "San Francisco";
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.05469rem;

  margin-top: 0.8rem;
  margin-left: 1.7rem;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.3rem;
  margin-top: 1%;
`;

const LikeContainer = styled.div`
  margin-top: 2%;
  /* margin-left: 17%; */
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 29rem;
  height: 1.375rem;
  margin-top: 0.31rem;
  margin-left: 1.7rem;
`;

const UploadTimeWrapper = styled.div`
  color: #9f9f9f;
  font-family: "Sudo Var", sans-serif;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.02625rem;
`;

const UserWrapper = styled(UploadTimeWrapper)`
  margin-left: 2rem;
`;

const ContributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  border-radius: 1rem;

  padding-left: 0.3rem;
  gap: 0rem;
  align-items: center;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-items: center;
  margin-left: 46%;
`;

const DownloadContainer = styled.div`
  margin-top: 2.18%;
  margin-left: 12%;
`;

export function PostModal(props) {
  const [postState, setPostState] = useState(props.post); //현재 모달이 띄워야할 post객체를 상태로 저장한다.
  const [contributePostList, setContributePostList] = useState(null);
  const { setFileUrl, setType, setFile, file, resetLoadedModel } = useLoadedModel();

  useEffect(() => {
    setType(postState.type);
    setFile(null);
    getModelFileApi(postState.modelUrl)
    .then((response) => {
      console.log("called");
      setFile(response.data);
    }); //postState변경시마다 모델의 url을 가지고 파일을 가져옴. blob형식으로 전역변수에 저장한다.
    
    getContributeListApi(postState.postId)
    .then((response) => {
      //FIXME: 데이터 형식 맞추기
      const ResponseDataList = JSON.parse(response).map(
        (data) => new PostModel(data)
      );
      setContributePostList(
        ResponseDataList.map((data, index) => (
          <div
            onClick={() => {
              handlePostClick(data);
            }}
            key={index}
          >
            <ContributePost post={data} />
          </div>
        ))
      );
    });

    console.log("request" + postState.postId);

    return () => {
      resetLoadedModel();
    }
  }, [postState]);

  function handlePostClick(post) {
    setPostState(post);
  }

  function handleDownload() {
    
  }

  
  return (
    <>
      <ModalContainer>
        <ModalPostContainer>
          <PostCanvas>
            {file ? (
              <Suspense>
                <UploadScene />
              </Suspense>
            ) : (
              <LoadingContainer>
                {/* <HashLoader color="#d63636" speedMultiplier={0.9}/> */}
                <MoonLoader color="#ff0000" size={33} />
              </LoadingContainer>
            )}
          </PostCanvas>
          <RowContainer>
            <Title>{postState.title}</Title>
            <DownloadContainer>
              <a href={postState.modelUrl}>
                <img
                  src="/src/resource/image/icon_download.png"
                  style={{ width: "28.31px", height: "26.8px" }}
                />
              </a>
            </DownloadContainer>
            <LikeContainer>
              <LikeComponent
                isLogged={props.isLogged}
                postId={postState.postId}
              />
            </LikeContainer>
          </RowContainer>
          <InfoContainer>
            <UploadTimeWrapper>
              upload time: {postState.uploadDate}
            </UploadTimeWrapper>
            <UserWrapper>User: {postState.userId}</UserWrapper>
          </InfoContainer>
        </ModalPostContainer>
        <ContributeContainer>
          {contributePostList ? (
            contributePostList
          ) : (
            <UploadTimeWrapper style={{ marginTop: "60%" }}>
              2차 창작물이 없습니다.
            </UploadTimeWrapper>
          )}
        </ContributeContainer>
      </ModalContainer>
    </>
  );
}
