import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: 0 10px;

    @media only screen and (max-width: 768px) {
      margin: 10px;
    }
  }
`;
