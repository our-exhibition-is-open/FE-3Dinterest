import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import * as THREE from 'three';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 13.125rem;
    height: 24.875rem;
    gap: 11px;
`
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 373px;
    border-radius: 0.9375rem;
    overflow: hidden;
`

const ImageWrapper = styled.img`
    border-radius: 0.9375rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TitleWrapper = styled.div`

    width: 3.5625rem;
    height: 1.1875rem;

    color: Black;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.84rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;
`

export function PostCard(props) {
    
    return (
        <>
        <Container>
            <PostWrapper>
                <ImageWrapper src={props.imgUrl}/>
            </PostWrapper>
            <TitleWrapper>
                {props.title}
            </TitleWrapper>
        </Container>
        </>
    );
}
