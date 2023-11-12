import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import * as THREE from 'three';


const Container = styled.div`
    position: relative;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 14.75rem;
    height: 14.75rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color:rgba(0, 0, 0);

    /* position: relative; */
`;

const ImageWrapper = styled.img`
    cursor: pointer;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
        opacity:0.8;
    }
`

const TitleWrapper = styled.div`
    width: 14.75rem;
    height: 1.1875rem;

    color: #ffffff;
    font-family: "SF-Pro-Rounded-Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.02844rem;

    position: absolute;
    left: 10%;
    top: 10%;

`

export function PostCard2(props) {
    const [isHovering, setHovering] = useState(false);
    const hiddenTitle = isHovering ? <TitleWrapper >{props.title}</TitleWrapper> : <TitleWrapper ></TitleWrapper>;

    console.log(props.title);
    function handleHovering(){
        setHovering(!isHovering);
    }

    return (
        <Container>
        <PostWrapper onMouseOver={handleHovering} onMouseLeave={handleHovering}>
            <ImageWrapper src={props.imgUrl} />
        </PostWrapper>
            {hiddenTitle}
        </Container>
    );
}
