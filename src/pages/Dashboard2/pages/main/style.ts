import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  width: 100%;
`;

export const Cards = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;

  padding: 1rem;

  & > div {
    margin: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const Graph = styled.div`
  display: flex;
  justify-content: stretch;
`;
