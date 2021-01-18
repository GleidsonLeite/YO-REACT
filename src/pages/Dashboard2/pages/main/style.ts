import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: #6656a0;
`;

export const Content = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'cards' 'graph';

  align-self: center;

  place-items: center;

  padding: 1rem;

  gap: 1rem;

  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Cards = styled.div`
  width: 100%;

  grid-area: cards;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  justify-content: center;
  justify-items: center;
  justify-self: center;

  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
`;

export const GraphAndTable = styled.div`
  width: 100%;
  height: 100%;
  grid-area: graph;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
  }
`;
