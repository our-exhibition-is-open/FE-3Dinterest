import React from 'react';
import { styled } from 'styled-components';

import { NavigationBar } from '../component/common/NavigationBar.jsx';
import { MasonryList } from '../component/mainpage/MasonryList.jsx'
import { PostCard2 } from '../component/mainpage/PostCardMain.jsx';
import { PostModel, datas } from '../model/PostModel.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function MainPage() {
     //나중에 api에서 받아올 데이터 모델로 대체 예정, 여기서 필요한 데이터는 url과 타이틀, 그리고 게시글 번호
     
    return(
        <Container>
            <NavigationBar />
            <MasonryList />
        </Container>
    );
}
 