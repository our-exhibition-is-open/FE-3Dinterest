import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import * as THREE from 'three';


const ImageWrapper = styled.img`
    cursor: pointer;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;`

export const TitleWrapper = styled.div`
    z-index: 1003;
    cursor: pointer;
    width: 14.75rem;
    height: 1.1875rem;

    color: #870b0b;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;

    position: relative;
    visibility: hidden;
`

const PostContainer = styled.div`
    z-index: 1002;

    /* position: relative; */
    display: flex;
    flex-direction: column;
    width: 13.3125rem;
    height: 13.8125rem;
    border-radius: 0.9rem;
    overflow: hidden;
    background-color: black;
    margin-top: 2.19rem;
    
    /* filter: ${(props) => props.onBlur ? "blur(10px)" : "blur(0px)"}; */
    &:hover {
        ${ImageWrapper}{
            opacity:0.6;
        }
        ${TitleWrapper}{
            visibility: visible;
        }
    }
`


export function ContributePost(props) {
    const post = props.post;

    return (
        <>
            <PostContainer> 
                <ImageWrapper src={post.imageUrl} />
                <TitleWrapper >{post.title}</TitleWrapper>
            </PostContainer>
        </>
        
    );
}
