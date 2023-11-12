import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import { PostCard } from "../common/PostCard";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 48px;
    margin-right: 48px;
    margin-top: 20px;
    gap: 15px;
`

export function MasonryList(props) {
    const postList = props.dataList.map(data => 
        <PostCard imgUrl={data.imgUrl} title={data.title} key={data.postId} />
        );

    return (
        <Container>
            {postList}
        </Container>
    );
}