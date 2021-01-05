import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Accordions = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;

  & > div {
    margin: 10px 0 0 0;
  }
`;

export const UserInformationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  color: white;

  flex-direction: column;
`;
