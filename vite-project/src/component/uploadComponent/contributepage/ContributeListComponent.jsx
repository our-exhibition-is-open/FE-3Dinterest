import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostModel } from "../../../model";
import { ContributePost } from "../../mainpage/modalComponent/ContributePost";
import { getContributeListApi } from "../../../api/getContributeListApi";
import { DownloadHistoryPostCard } from "./DownloadHistoryPostCard";

const DetailBar = styled.div`
  height: 12.5rem;
  width: 3px;
  background-color: #9f9f9f;
  border-radius: 2px;
`

const Container = styled.div`
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
  gap: 0.5rem;
  width: 102.7%;
  height: 14.2rem;
  padding-top: 1rem;

  border-radius: 1rem;
  border-width: 2px;
  border-style: solid;
  border-color: #9f9f9f;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export function ContributeListComponent({setClickedPost}) {
  const [postList, setPostList] = useState([]);;

  useEffect(() => {
    getContributeListApi(1)
    .then((response) => {
      const ResponseDataList = JSON.parse(response).map((data) => new PostModel(data));
      setPostList(
        ResponseDataList.map((data, index) => (
            <DownloadHistoryPostCard key={index} post={data}/>
        ))
      );
    })
    .catch((e) => {
      console.error("contributeListApi to component error", e);
    })
  },[])
  
  // function handleClick() {}
  //FIXME: 다운로드 히스토리 게시글을 선택하면 테두리가 빨갛게,
  // 해당 포스트 id는 업로드 버튼을 누르면 어떻게 전송할지(전역? 로컬상태? props끌어올리기?) 고민하기
  return (
    <>
      <Container>
      <DetailBar/>
        {postList}
      </Container>
    </>
  );
}
