import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { PostModel } from "../../model";
import { PostCardMain } from "./PostCardMain";
import { getPostListApi } from "../../api/getPostListApi";
import { ModalBackground, PostModal } from "./modalComponent/PostModal";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 3;
  margin-top: 6%;
  gap: 1.1rem;
  width: 80rem;
`;

export function PostList(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getPostListApi().then((response) => {
      // console.log(response)
      // const parsedJson = JSON.parse(response);
      setDataList(response);
    });
  }, []);

  const postComponentList = dataList.map((data, index) => (
    <PostCardMain key={index} post={new PostModel(data)} isLogged={props.isLogged} />
  ));

  return <Container>{postComponentList}</Container>;
}
