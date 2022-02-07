import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  body {
    background-color: #2e4057;
    margin: 0;
  }

  .patterns {
    height: 80vh;
  }

  svg text {
    font-family: Lora;
    letter-spacing: 10px;
    stroke: #ffa5d8;
    font-size: 150px;
    font-weight: 700;
    stroke-width: 3;

    animation: textAnimate 5s infinite alternate;
  }

  @keyframes textAnimate {
    0% {
      stroke-dasharray: 0 50%;
      stroke-dashoffset: 20%;
      fill: hsl(189, 68%, 75%);
    }

    100% {
      stroke-dasharray: 50% 0;
      stroke-dashoffstet: -20%;
      fill: hsla(189, 68%, 75%, 0%);
    }
  }
`;
