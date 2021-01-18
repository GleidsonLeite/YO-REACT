import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: #fff;
  background-color: var(--purple);
  border-radius: 1rem;
  padding: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 0.5fr 4.5fr;
  grid-template-areas: 'title' 'content';
`;

export const Title = styled.div`
  width: 100%;
  grid-area: title;
  justify-content: start;
  align-content: center;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  grid-area: 'content';
`;
