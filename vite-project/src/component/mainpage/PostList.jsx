import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { PostModel } from "../../model";
import { PostCardMain } from "./PostCardMain";
import { getPostListApi } from "../../api/getPostListApi";
import { ModalBackground, PostModal } from "./modal/PostModal";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 3;
  margin-top: 0%;
  gap: 1.1rem;
  width: 65rem;
`;

export function PostList(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getPostListApi().then((response) => {
      setDataList(response);
      console.log(response[1]);
    });
  }, []);

  const postComponentList = dataList.map((data, index) => (
    <PostCardMain key={index} post={new PostModel(data)} />
  ));

  return <Container>{postComponentList}</Container>;
}
