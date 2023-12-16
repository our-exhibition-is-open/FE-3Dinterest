import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
    cursor: pointer;
    z-index: 1;
    display: flex;
    
    align-items: center;
    text-align: center;

    z-index: 1;
    margin-top: 12%;
    margin-left: 6%;
    width: 29rem;
    
    background: linear-gradient(to right, #CF0000 14%, #0000FF 77%, #000000 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: "San Francisco";
    font-size: 5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.05469rem;
`

export default function LogoComponent() {
    return (
        <LogoContainer>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>3Dinterest</Link>
        </LogoContainer>
    )
}