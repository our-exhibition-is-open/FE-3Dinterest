import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { NavigationBar } from "../component/nav/NavigationBar.jsx";
import { PostList } from "../component/mainpage/PostList.jsx";
import { WelcomeHeader } from "../component/mainpage/WelcomeComponent";
import { getPostListApi } from "../api/getPostListApi.js";
import { LikeComponent } from "../component/common/LikeComponent.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainPage() {
  const [isLogged, setIsLogged] = useState(
    (sessionStorage.getItem("isLoggedIn") == "true") ? true : false
  );


  function handleLogOut() {
    setIsLogged(false);
    // logoutUser();
    alert("로그아웃되었습니다.");
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("userId", null);
  }

  return (
    <Container>
      <NavigationBar isLogged={isLogged} handleLogOut={handleLogOut} />
      {/* <WelcomeHeader isLogged={isLogged} userName={sessionStorage.getItem("userId")}/> */}
      <PostList isLogged={isLogged}/>
    </Container>
  );
}
