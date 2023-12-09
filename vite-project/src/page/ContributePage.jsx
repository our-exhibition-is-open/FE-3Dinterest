import React, { useEffect, useState } from "react";
import { NavigationBar } from "../component/navComponent/NavigationBar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FileComponent } from "../component/uploadComponent/uploadpage/FileComponent";
import { UploadComponent } from "../component/uploadComponent/contributepage/UploadComponent";
import { useUploadStore } from "../model/store";
import { GageComponent } from "../component/common/GageComponent";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;

export default function ContributePage() {
  const { resetUploadStore, setUserId } = useUploadStore();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );


  //1(1:1)~28(100%)

  useEffect(() => {
    if (isLogged == false) {
      alert("로그인 먼저 해주세요.");
      navigate("/");
    }
    else
    {
      setUserId(sessionStorage.getItem("userId"));
    }

    return () => {
      resetUploadStore();
    };
  }, []);

  function handleLogOut() {
    setIsLogged(false);
    // logoutUser();
    alert("로그아웃되었습니다.");
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("userId", null);
    navigate("/");
  }

  return (
    <>
      <NavigationBar isLogged={isLogged} handleLogOut={handleLogOut} />
      <GageComponent />
      <UploadContainer>
        <FileComponent />
        <UploadComponent />
      </UploadContainer>
    </>
  );
}
