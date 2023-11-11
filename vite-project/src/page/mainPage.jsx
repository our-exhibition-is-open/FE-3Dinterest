import React from 'react';
import { NavigationBar } from '../component/common/NavigationBar.jsx';
import { PostCard } from '../component/common/PostCard.jsx';



export default function MainPage() {
    return(
        <>
            <NavigationBar />
            <PostCard />
        </>
    );
}
