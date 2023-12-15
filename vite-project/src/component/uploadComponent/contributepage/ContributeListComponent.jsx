import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostModel, useUploadStore } from "../../../model";
import { ContributePost } from "../../mainpage/modalComponent/ContributePost";
import { getContributeListApi } from "../../../api/getContributeListApi";
import { DownloadHistoryPostCard } from "./DownloadHistoryPostCard";
import { getDownloadHistoryApi } from "../../../api/getDownloadHistory";
import { useNavigate } from "react-router-dom";

const DetailBar = styled.div`
  z-index: 1020;
  height: 12.5rem;
  width: 3px;
  background-color: #9f9f9f;
  border-radius: 2px;
`;

const Container = styled.div`
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  gap: 0.5rem;
  width: 101.3%;
  height: 13rem;

  padding-top: 0.8rem;
  padding-left: 0.4rem;
  /* padding-right: 0.4rem; */
  padding-bottom: 0.8rem;
  border-left-width: 3px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;

  border-style: solid;
  border-color: #9f9f9f;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export function ContributeListComponent() {
  const [postList, setPostList] = useState([]);
  const { userId } = useUploadStore();
  const navigator = useNavigate();

  useEffect(() => {
    console.log(sessionStorage.getItem("userId"));
    getDownloadHistoryApi(sessionStorage.getItem("userId"))
      .then((response) => {
        console.log()
        if (response.data == "[]") {
          alert("다운로드 기록이 존재하지 않아 컨트리뷰트 할 수 없습니다.");
          navigator("/");
        } else {
          const ResponseDataList = JSON.parse(response).map(
            (data) => new PostModel(data)
          );
          setPostList(
            ResponseDataList.map((data, index) => (
              <div>
                <DownloadHistoryPostCard key={index} post={data} />
              </div>
            ))
          );
        }
      })
      .catch((e) => {
        console.error("contributeListApi to component error", e);
        alert(
          "유저의 다운로드 기록을 가져오던 중 에러 발생. 메인페이지로 이동합니다."
        );
        navigator("/");
      });
    console.log(postList);
  }, []);

  // function handleClick() {}
  //FIXME: 다운로드 히스토리 게시글을 선택하면 테두리가 빨갛게,
  // 해당 포스트 id는 업로드 버튼을 누르면 어떻게 전송할지(전역? 로컬상태? props끌어올리기?) 고민하기
  return (
    <>
      <Container>
        {/* <DetailBar/> */}
        {postList}
      </Container>
    </>
  );
}
