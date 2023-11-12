import React from "react";

import { styled } from 'styled-components';
import { ButtonComponent } from "./ButtonComponent";

const Header = styled.header`
        display: flex;
        height: 30px;
        padding: 20px 20px 9px;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 10px;
    
        background-color: #ffffff;
        box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.25);
`;

export function NavigationBar() {
    return (
        <Header>
            <ButtonComponent route="/loginpage" buttonName="로그인"/>
            <ButtonComponent route="/loginpage" buttonName="업로드"/>
            <ButtonComponent route="/loginpage" buttonName="컨트리뷰트"/>
        </Header>
    )
}
