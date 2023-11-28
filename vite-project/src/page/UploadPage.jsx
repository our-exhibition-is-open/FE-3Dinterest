import React, { useEffect, useState } from "react";
import { NavigationBar } from "../component/nav/NavigationBar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FileComponent } from "../component/upload-page/FileComponent";
import { UploadComponent } from "../component/upload-page/UploadComponent";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;


export default function UploadPage() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );
  

  useEffect(() => {
    if (isLogged == false) {
      alert("로그인 먼저 해주세요.");
      navigate("/");
    }
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
      <UploadContainer>
        <FileComponent/>
        <UploadComponent/>
      </UploadContainer>
    </>
  );
}
