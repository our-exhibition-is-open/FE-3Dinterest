import React, { useState } from "react";
import { styled } from 'styled-components';

import { datas, PostModel } from "../../model";
import { PostCardMain } from "./PostCardMain";
import { getPostListApi } from "../../api/getPostListApi"
import { ModalBackground, PostModal } from "./modal/PostModal";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    z-index: 3;
    margin-top: 0%;
    gap: 1.1rem;
    width: 65rem;
`

export function PostList(props) {
    

    const postList = getPostListApi(23);
    const postComponentList = postList.map((post, index) => 
        <PostCardMain key={index} post={post} />
        )

        
    return (
        <Container>
            {postComponentList}
        </Container>
    );
}