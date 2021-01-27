import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-template-rows: min-content 1fr;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: #fff;
  border-radius: 2rem;

  overflow: hidden;
`;
