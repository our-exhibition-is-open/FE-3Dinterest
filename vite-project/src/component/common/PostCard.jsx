import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 13.125rem;
    height: 24.875rem;
    gap: 11px;
`
const PostWrapper = styled.div`
    width: 210px;
    height: 373px;
    color: Black;
    border-radius: 0.9375rem;

    background-image: url('src/resource/image/1024025.jpeg');
`

const TitleWrapper = styled.div`

    width: 3.5625rem;
    height: 1.1875rem;

    color: Black;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 0.814rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;
`

export function PostCard() {
    return (
        <>
        <Container>
            <PostWrapper>
            </PostWrapper>
            <TitleWrapper>
                Model 1
            </TitleWrapper>
        </Container>
        </>
    );
}