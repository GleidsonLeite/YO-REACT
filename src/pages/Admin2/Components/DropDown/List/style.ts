import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: rows;
  grid-template-rows: 1fr;
  justify-content: start;
  justify-items: start;
  align-items: center;

  font-size: 14px;

  gap: 0.5rem;
  padding: 0 0.5rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr;

  align-items: center;

  gap: 0.5rem;

  & > p {
    cursor: pointer;
  }
`;
