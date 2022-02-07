import styled from "styled-components";
import { cardImg } from "../../images";

export const Wrapper = styled.div`
  color: var(--white);
  text-align: center;
  width: 80%;
  border-radius: 5rem;
  padding-bottom: 5rem;
  background-image: url(${cardImg});
  background-size: cover;
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--white);
  }
  @media screen and (max-width: 1400px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const CurrentInfo = styled.div`
  background-size: cover;
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  h2 {
    text-transform: capitalize;
  }
  @media screen and (max-width: 1400px) {
    h2 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    .location {
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  .location {
    justify-self: end;
    padding: 2rem;
  }
  .info {
    padding: 2rem;
  }
  h2 {
    margin: 1.5rem;
  }
`;
export const Forecast = styled.div`
  /* background-color: var(--white); */
  min-height: 30vh;
  /* box-shadow: inset 0px 17px 21px 3px rgba(0, 0, 0, 0.3); */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media screen and (max-width: 110rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 60rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
