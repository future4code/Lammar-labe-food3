import React from "react";
import Screen from "../../img/SplashScreen.png";
import styled from "styled-components";

export const LoaderImg = styled.img`
  display: flex;
  width:100vw;
  flex-direction:center;
  justify-content: center;
  align-items: center;
`;


export const SplashScreen= () => {
  
    return (
    <div>
      <LoaderImg src={Screen} />
    </div>
  );
};