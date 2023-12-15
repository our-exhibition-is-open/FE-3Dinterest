import React from "react";
import { useState } from "react";
import { styled } from 'styled-components';
import { useDownloadHistory } from "../../../model";

const ImageWrapper = styled.img`
    z-index: 1003;
    cursor: pointer;
    border-radius: 1rem;
    width: 12rem;
    height: 12rem;
    object-fit: cover;

    border-width: 2px;
    border-color: red;
    border-style: ${(props) => props.focus ? "solid" : "none"};
    
    &:hover {
            opacity:0.8;
    }
`

const TitleWrapper = styled.div`
    z-index: 1010;
    cursor: pointer;
    width: 14.75rem;
    /* height: 1.1875rem; */

    color: #000000;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.05844rem;

    margin-top: 4px; 
`


const PostContainer = styled.div`
    z-index: 1002;

    /* position: relative; */
    display: flex;
    flex-direction: column;
    /* width: 13rem;
    height: 13.8125rem; */
    overflow: hidden;
    
    

`


export function DownloadHistoryPostCard(props) {
    const post = props.post;
    const {clickedPost, setClickedPost} = useDownloadHistory();

    
    function handleClick() {
        setClickedPost(post.postId);
    }
    
    return (
        <>
            <PostContainer onClick={handleClick}> 
                <ImageWrapper src={post.imageUrl} focus={clickedPost == post.postId}/>
                <TitleWrapper >{post.title}</TitleWrapper>
            </PostContainer>
        </>
        
    );
}
