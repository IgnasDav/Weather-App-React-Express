import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 150rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4rem;
  .spinner {
    grid-column: 2 / 3;
  }
  h1 {
    text-align: center;
    grid-column: 1 / -1;
    color: var(--red);
    text-transform: capitalize;
  }
  @media screen and (max-width: 105rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 68rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 44rem) {
    grid-template-columns: 1fr;
  }
`;
