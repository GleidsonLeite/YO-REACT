import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  min-width: 0;

  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
`;
