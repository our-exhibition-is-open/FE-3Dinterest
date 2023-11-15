import React from "react";
import { styled } from 'styled-components';

import { datas, PostModel } from "../../model";
import { PostCardMain } from "./PostCardMain";
import { getPostListApi } from "../../api/getPostListApi"

const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 0%;
    gap: 1rem;
    width: 62rem;
`

export function PostList(props) {
    
    const postList = getPostListApi(23);
    const postComponentList = postList.map((post, index) => 
        <PostCardMain key={index} post={post}/>
        )
        
    return (
        <Container>
            {postComponentList}
        </Container>
    );
}