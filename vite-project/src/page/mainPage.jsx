import React from 'react';
import { NavigationBar } from '../component/common/NavigationBar.jsx';
import { MasonryList } from '../component/mainpage/MasonryList.jsx'

import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 48px;
    margin-right: 48px;
    margin-top: 20px;
    gap: 15px;
`

export default function MainPage() {
    const datas = [
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "Model 1", postId:0},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"Model 1", postId:1},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"Model 1", postId:3},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"Model 1", postId:4},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"Model 1", postId:5},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "Model 1", postId:60},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "Model 1", postId:30},
        {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "Model 1", postId:70},
        

    ]; //나중에 api에서 받아올 데이터 모델로 대체 예정, 여기서 필요한 데이터는 url과 타이틀, 그리고 게시글 번호

    return(
        <>
            <NavigationBar />
            <MasonryList dataList={datas} />
        </>
    );
}
