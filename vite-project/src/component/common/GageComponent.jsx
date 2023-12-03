import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useUploadStore } from "../../model";

const GageBar = styled.div`
  z-index: 11;
  background-color: #40e040;
  box-shadow: 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00, 0 0 0px #2fff00,
    0 0 1px #2fff00, 0 0 3px #2fff00;

  position: fixed;
  width: 25%;
  height: 2px;
  top: 3.7rem;
  left: 0rem;

  transform: scaleX(${(props) => props.gagelevel});
  transition: transform ease 0.8s;
`;

export function GageComponent() {
    const [gageLevel, setGageLevel] = useState(1);
    const {file, title} = useUploadStore();

    useEffect(() => {
        console.log(file)
        if(file != null ^  title != "")
          setGageLevel(4);
        else if(file != null && title != "")
          setGageLevel(7);
        else
        setGageLevel(1);
      })
  return (
    <>
      <GageBar gagelevel={gageLevel} />
    </>
  );
}
