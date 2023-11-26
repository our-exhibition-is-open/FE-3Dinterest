import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import * as THREE from "three";
import { ModalBackground, PostModal } from "./modal/PostModal";

const ImageWrapper = styled.img`
  cursor: pointer;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  cursor: pointer;
  width: 14.75rem;
  height: 1.1875rem;

  color: #ffffff;
  font-family: "SF-Pro-Rounded-Regular";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.02844rem;

  position: absolute;
  left: 10%;
  top: 10%;
  visibility: hidden;
`;

const PostContainer = styled.div`
  z-index: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 14.75rem;
  height: 14.75rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: black;

  &:hover {
    ${ImageWrapper} {
      opacity: 0.6;
    }
    ${TitleWrapper} {
      visibility: visible;
    }
  }
`;

export function PostCardMain(props) {
  const post = props.post;
  const [isClicked, setClicked] = useState(false);

  if (isClicked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  function handleBackgroundClick() {
    setClicked(false);
  }
  function handlePostClick() {
    setClicked(true);
  }

  return (
    <>
      <PostContainer>
        <ImageWrapper src={post.imageUrl} onClick={handlePostClick} />
        <TitleWrapper>{post.title}</TitleWrapper>
      </PostContainer>

      {isClicked && (
        <>
          <ModalBackground onClick={handleBackgroundClick} />
          <PostModal post={props.post} />
        </>
      )}
    </>
  );
}
