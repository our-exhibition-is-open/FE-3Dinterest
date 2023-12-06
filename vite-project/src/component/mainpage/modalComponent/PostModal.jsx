import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getPostListApi } from "../../../api/getPostListApi";

import { PostModel } from "../../../model";
import { ContributePost } from "./ContributePost";
import { Scene } from "../../threejsComponent/Scene";
import { getContributeListApi } from "../../../api/getContributeListApi";
import { LikeComponent } from "../../common/LikeComponent";

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
  height: 39rem;
  justify-self: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 1.6rem;
  padding-right: 6.7px;
  border-radius: 1.5rem;
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
  position: static;
  margin-left: 1.37rem;
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
`;

const LikeContainer = styled.div`
  margin-top: 2%;
  margin-left: 17%;
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

export function PostModal(props) {
  const [postState, setPostState] = useState(props.post);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getContributeListApi(postState.postId).then((response) => {
      setDataList(response);
    });
    console.log("request" + postState.postId);
  }, [postState]);

  function handlePostClick(post) {
    setPostState(post);
  }

  return (
    <>
      <ModalContainer>
        <ModalPostContainer>
          <PostCanvas>
            <Suspense>
              <Scene gltfUrl={postState.modelUrl} />
            </Suspense>
          </PostCanvas>
          <RowContainer>
            <Title>{postState.title}</Title>
            <LikeContainer>
              <LikeComponent
                isLogged={props.isLogged}
                postId={postState.postId}
              />
            </LikeContainer>
          </RowContainer>
          <InfoContainer>
            <UploadTimeWrapper>
              upload time: {postState.uploadTime}
            </UploadTimeWrapper>
            <UserWrapper>User: {postState.user}</UserWrapper>
          </InfoContainer>
        </ModalPostContainer>
        <ContributeContainer>
          {dataList &&
            dataList.map((data, index) => (
              <div
                onClick={() => {
                  handlePostClick(new PostModel(data));
                }}
                key={index}
              >
                <ContributePost post={new PostModel(data)} />
              </div>
            ))}
        </ContributeContainer>
      </ModalContainer>
    </>
  );
}