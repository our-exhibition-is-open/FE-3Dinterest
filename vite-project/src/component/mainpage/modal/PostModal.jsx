
import React, { Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CameraControls } from '@react-three/drei';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { getPostListApi } from "../../../api/getPostListApi";

import { ContributePost } from "./ContributePost";
import { Scene } from "../../threejs/Scene";


export const ModalBackground = styled.div`
    display: flex;
    z-index: 1000;
    
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* justify-content: center;
    align-items: center; */
    background:#ffffff2f;
    
    backdrop-filter: blur(6px);
`

//TODO: 나중에 레이아웃 변경하기, 자꾸 모달을 선택하면 뒷배경의 클릭 리스너가 실행됨
//그래서 일단 임시적으로 뒷배경과 모달을 분리했음(자식 조상 끊음) -> 선택이 되지 않는 대신, 레이아웃 조깥아짐
const ModalContainer = styled.div`
    display: flex;
    z-index: 1001;
    flex-direction: row;
    width: 55.6875rem;
    height: 41.875rem;
    justify-self: center;
    justify-content: center;
    position: fixed;
    /* margin: 0 auto; // vertical centering */
    top: 0;
    
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 1.5rem;
    background: #FFF;

    
    
`

const ModalPostContainer = styled.div`
    display: flex;
    z-index: 1002;
    flex-direction: column;
    align-items: flex-start;
    height: 41.875rem;
    width: 40.745rem;

`
const PostCanvas = styled.div`
    z-index: 1002;
    width: 39.375rem;
    height: 29.875rem;
    flex-shrink: 0;
    /* background: #D9D9D9; */

    position: static;
    margin-top: 2.06rem;
    margin-left: 1.37rem;
`
const Title = styled.div`
    width: 29rem;
    height: 1.9375rem;
    
    color: #000;
    font-family: "San Francisco";
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.05469rem;

    margin-top: 0.69rem;
    margin-left: 1.38rem;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 29rem;
    height: 1.375rem;
    margin-top: 0.31rem;
    margin-left: 1.55rem;
`

const UploadTimeWrapper = styled.div`
    color: #9F9F9F;
    font-family: 'Sudo Var', sans-serif;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02625rem;
`

const UserWrapper = styled.div`
    color: #9F9F9F;
    font-family: 'Sudo Var', sans-serif;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02625rem;
    margin-left: 2rem;
`

const ContributeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    border-radius: 0rem 1.5rem 1.5rem 0;
    gap: 0.5rem;
    align-items: center;
    overflow: scroll;
    padding-top: 2.19rem;
    
    &::-webkit-scrollbar {
    display: none;
    }
`

export function PostModal(props) {
    const [postState, setPostState] = useState(props.post);
    const postList = getPostListApi(23);
    //TODO: 컨트리뷰트 api로 변경하기
    const postComponentList = postList.map((post, index) => 
        <div onClick={()=>{handlePostClick(post); console.log("imclicked")}} key={index}>
                <ContributePost post={post} />
        </div>
    );
    
    function handlePostClick(post) {
        setPostState(post);
        console.log(post.user);
    }

    return (
        <>
        
            <ModalContainer>
                    <ModalPostContainer>
                        <PostCanvas>
                            <Suspense>
                                <Scene/>
                            </Suspense>
                        </PostCanvas>
                        <Title>{postState.title}</Title>
                        <InfoContainer>
                            <UploadTimeWrapper>upload time: {postState.uploadTime}</UploadTimeWrapper>
                            <UserWrapper>User: {postState.user}</UserWrapper>
                        </InfoContainer>
                    </ModalPostContainer>
                    <ContributeContainer>
                        {postComponentList}
                    </ContributeContainer>
            </ModalContainer>
        
        </>
    )
}