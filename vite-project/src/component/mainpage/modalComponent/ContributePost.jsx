import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import * as THREE from 'three';


const BackgroundContainer = styled.div`
    background-color: black;
    width: 13rem;
    height: 12.5rem;
    border-radius: 0.9rem;
`

const ImageWrapper = styled.img`
    z-index: 1003;
    cursor: pointer;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TitleWrapper = styled.div`
    z-index: 1010;
    cursor: pointer;
    width: 14.75rem;
    height: 1.1875rem;

    color: #000000;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.83rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;
    margin-top: 4px;
    margin-left: 2px;
`


const PostContainer = styled.div`
    z-index: 1002;

    /* position: relative; */
    display: flex;
    flex-direction: column;
    width: 13rem;
    height: 14.8125rem;
    overflow: hidden;
    
    
    &:hover {
        ${ImageWrapper}{
            opacity:0.8;
        }
    }
`


export function ContributePost(props) {
    const post = props.post;

    return (
        <>
            <PostContainer> 
                <BackgroundContainer>
                    <ImageWrapper src={post.imageUrl} />
                </BackgroundContainer>
                <TitleWrapper >{post.title}</TitleWrapper>
            </PostContainer>
        </>
        
    );
}
