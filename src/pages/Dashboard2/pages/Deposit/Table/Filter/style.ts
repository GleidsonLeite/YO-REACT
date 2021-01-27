import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-self: center;
  justify-items: center;
  background-color: #533f92;

  padding: 1rem 0;

  & > svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #533f92;
  }

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
  }
`;
