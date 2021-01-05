import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 92vh;
`;

export const Content = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    align-items: column;
  }
`;

export const Accordions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }

  & > div {
    margin-top: 10px;
    margin-right: 10px;
  }
`;
