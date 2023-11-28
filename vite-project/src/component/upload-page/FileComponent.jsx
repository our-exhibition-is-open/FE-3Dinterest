import React, { useState } from "react";
import styled from "styled-components";

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostCanvas = styled.div`
  width: 39.375rem;
  height: 28.3rem;
  
  border-radius: 26px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23333' stroke-width='3' stroke-dasharray='17' stroke-dashoffset='36' stroke-linecap='round'/%3e%3c/svg%3e");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  color: #9f9f9f;
  font-family: "Sudo Var", sans-serif;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.02625rem;
`;

export function FileComponent() {
  const [loadedFile, setLoadedFile] = useState("");

  return (
    <>
      <FileContainer>
        {loadedFile == "" ? (
          <>
            <PostCanvas>
              <Info>gltf파일을 업로드해주세요.</Info>
            </PostCanvas>
          </>
        ) : (
          <></>
        )}
      </FileContainer>
    </>
  );
}
