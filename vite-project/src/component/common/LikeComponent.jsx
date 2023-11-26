import React, { useState } from "react";
import styled from "styled-components";

export const LikeContainer = styled.img`
  cursor: pointer;
  width: 12%;
  height: 12%;

  position: absolute;
  right: 10%;
  top: 9%;
  visibility: hidden;
`;

export function LikeComponent() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  function handleCilck() {
    setIsLiked(true);
  }
  return (
    <>
      {isLiked ? (
        <LikeContainer src="/src/resource/image/icon_heart_hover.png" />
      ) : (
        <LikeContainer
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
