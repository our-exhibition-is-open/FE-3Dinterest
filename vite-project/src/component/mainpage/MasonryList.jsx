import React from "react";

import { styled } from 'styled-components';
import { datas } from "../../model";
import { PostCard } from "../common/PostCard";
import { PostCard2 } from "./PostCardMain";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 9%;
    gap: 1rem;
    width: 62rem;
    padding-left: 14rem;
    padding-right: 9rem;
`

export function MasonryList(props) {

    
    const postList = datas.map(data => 
        <PostCard2 imgUrl={data.imgUrl} title={data.title} key={data.postId} />
        );

    return (
        <Container>
            {postList}
        </Container>
    );
}