import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-auto-flow: row;
  grid-template-rows: min-content 1fr;

  & > h1 {
    font-size: 18px;
  }
  & > h4 {
    font-size: 14px;
    color: rgba(43, 43, 43, 0.7);
  }
`;
