import React, { useState } from "react";
import styled from "styled-components";
import { postLikeApi } from "../../api/postLikeApi";
import { useNavigate } from "react-router-dom";


export function LikeComponent(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  function handleCilck() {
    if (props.isLogged) {
      setIsLiked(!isLiked);
      postLikeApi(
        props.postId,
        sessionStorage.getItem("userId"),
        isLiked
      ).catch((error) => {
        console.log(error);
      });
    } else {
      alert("로그인 먼저 하세요.");
      navigate("/login");
    }
  }
//   console.log("like state : " + isLiked);
  return (
    <>
      {isLiked && props.isLogged ? (
        <img style={{width: "28.31px", height: "28.31px"}}
          src="/src/resource/image/icon_heart_hover.png"
          onClick={handleCilck}
        />
      ) : (
        <img style={{width: "28.31px", height: "28.31px"}}
          src={`/src/resource/image/icon_heart${
            isHovering ? "_hover" : ""
          }.png`}
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleCilck}
        />
      )}
    </>
  );
}
