import styled from "styled-components";
export const BiggerWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;
export const Wrapper = styled.div`
  border: 0.5rem solid var(--white);
  border-radius: 5rem;
  color: var(--white);
  text-align: center;
  height: 30rem;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding: 0.5rem;
    font-size: 1.8rem;
  }
`;
