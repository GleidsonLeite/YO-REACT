import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Accordions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: 'column';
  flex-wrap: wrap;

  & > div {
    margin: 10px 0 0 0;
  }
`;
