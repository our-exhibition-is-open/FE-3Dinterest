import React, { useRef, useState, Suspense, useEffect } from "react";
import styled from "styled-components";
import { useLoadedModel } from "../../../model/store";
import { UploadScene } from "../../threejsComponent/UploadScene";
import { fileNameParser } from "../../../util/uploadUtil/fileNameParser";

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-top: 14%;
`;

const PostCanvas = styled.label`
  cursor: pointer;
  width: 39.375rem;
  height: 28.3rem;

  border-radius: 26px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='26' ry='26' stroke='%23333' stroke-width='3' stroke-dasharray='17' stroke-dashoffset='36' stroke-linecap='round'/%3e%3c/svg%3e");

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Info = styled.div`
  color: #9f9f9f;
  font-family: "SF-Pro-Rounded-Regular";
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.02625rem;
`;

export function FileComponent() {
  const { setFile, setType } = useLoadedModel();
  const [tempFile, setTempFile] = useState();
  const [fileLoad, setFileLoad] = useState(false);
  // console.log(file);
  console.log(fileLoad);
  // console.log("loaded file")
  function handleChange(e) {
    // setTempFile(e.target.files[0]);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setType(fileNameParser(e.target.files[0].name));

    setFileLoad(true);
  }

  return (
    <>
      <FileContainer>
        {fileLoad ? (
          <>
            <PostCanvas>
              <Suspense>
                <UploadScene />
              </Suspense>
            </PostCanvas>
          </>
        ) : (
          <>
            <PostCanvas>
              <input
                type="file"
                accept=".glb,.3dm"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <Info
                style={{
                  fontFamily: "San Francisco",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Choose a file
              </Info>
              <Info>
                We recommend using .glb format or .3dm format less than 100MB.
              </Info>
            </PostCanvas>
          </>
        )}
      </FileContainer>
    </>
  );
}
