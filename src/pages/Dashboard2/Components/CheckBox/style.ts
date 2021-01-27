import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;

  gap: 0.5rem;

  grid-auto-flow: column;
  grid-template-columns: min-content min-content;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;

  & > p {
    color: #533f92;
  }
  & > svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #00bfb2;
  }
`;
