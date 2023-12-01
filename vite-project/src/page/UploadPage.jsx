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
 
const Gage = styled.div`
  z-index: 11;
  background-color: #40e040;
  box-shadow: 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00,
    0 0 1px #2fff00, 0 0 3px #2fff00;

  position: fixed;
  width: 25%;
  height: 2px;
  top: 3.7rem;

  
  transform: scaleX(${(props) => props.gageLevel});
  transition: transform ease 0.8s;
`

export default function UploadPage() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );
  const [gageLevel, setGageLevel] = useState(1); //1(1:1)~28(100%)
  

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
      <Gage gageLevel={gageLevel}/>
      <UploadContainer>
        <FileComponent changeGageLevel={setGageLevel} currentGageLevel={gageLevel}/>
        <UploadComponent/>
      </UploadContainer>
    </>
  );
}
