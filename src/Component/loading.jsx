import React from "react";
import styled, { keyframes } from "styled-components";
import './loading.scss'

// Styled Components

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  background-color: #2b3595;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

export function loading() {
    return (
      <div className="centerdot">
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
      </div>
    );
  }
  
  export default loading