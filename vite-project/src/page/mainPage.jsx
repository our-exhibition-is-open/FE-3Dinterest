import React from 'react';
import { styled } from 'styled-components';

import { NavigationBar } from '../component/common/NavigationBar.jsx';
import { PostList } from '../component/mainpage/PostList.jsx'
import {WelcomeHeader} from '../component/mainpage/WelcomeComponent';
import {MainBackground} from '../component/threejs/MainBackground.jsx'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export default function MainPage() {
     // TODO: 나중에 api에서 받아올 데이터 모델로 대체 예정, 여기서 필요한 데이터는 url과 타이틀, 그리고 게시글 번호
    const userName = "UserName";
    const modelCount = 26;
    return(
        <Container>
            {/* <MainBackground>
            </MainBackground> */}
            <NavigationBar />
            <WelcomeHeader userName={userName} modelCount={modelCount}/>
            <PostList />
        </Container>
    );
}
 