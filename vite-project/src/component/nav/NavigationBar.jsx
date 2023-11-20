import React, {useState} from "react";

import { styled } from 'styled-components';

import { Button, ButtonComponent } from "../common/ButtonComponent";
import { ModalBackground, PostModal } from "../mainpage/modal/PostModal";
import { Link } from "react-router-dom";

const Header = styled.header`
        z-index: 10;
        position: fixed;
        top: 0;
        /* width: 100% */
        left: 0;
        right: 0;
        display: flex;
        height: 30px;
        padding: 20px 20px 9px;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 10px;

        background:#ffffffea; backdrop-filter: blur(3px);

        box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.25);
`;

export function NavigationBar() {
    const [isClicked, setClicked] = useState(false);
    
    function handleClick() {
        setClicked(!isClicked);
    }

    if(isClicked)
    {
        document.body.style.overflow = 'hidden';
    }
    else
    {
        document.body.style.overflow = 'auto';
    }
    
    return (
        <>
        <Header>
            <div>
                <ButtonComponent buttonName="로그인" route="/login" />
            </div>
            <Button>
                <Link to="/register" style={{ color: "black",textDecoration: "none"}}>회원가입</Link>
            </Button>
            <div>
                <ButtonComponent buttonName="업로드" route="/upload"/>
            </div>

            {isClicked && (
            <ModalBackground onClick={handleClick}/>
            
        )
        }
        </Header>
        
        </>
    )
}
