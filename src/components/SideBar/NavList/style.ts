import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-auto-flow: column;
    justify-content: space-around;
    gap: 0.5rem;
  }
`;
