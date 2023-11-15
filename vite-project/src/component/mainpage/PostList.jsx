import React, { useState } from "react";
import { styled } from 'styled-components';

import { datas, PostModel } from "../../model";
import { PostCardMain } from "./PostCardMain";
import { getPostListApi } from "../../api/getPostListApi"
import { ModalBackground, PostModal } from "./modal/PostModal";

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
    const [selectedPost, setSelectedPost] = useState(null);
    

    const postList = getPostListApi(23);
    const postComponentList = postList.map((post, index) => 
        <PostCardMain key={index} post={post} onClick={() => {console.log("etstset"); setSelectedPost(post.postId);}}/>
        )
    
    if(selectedPost == null)
    {
        document.body.style.overflow = 'auto';
    }
    else
    {
        document.body.style.overflow = 'hidden';
    }

        
    return (
        <Container>
            {postComponentList}
            {selectedPost && (
            <>
                <ModalBackground onClick={()=> setSelectedPost(null)} />
                <PostModal post={selectedPost}/>
            </>
        )}
        </Container>
    );
}