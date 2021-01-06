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

export const CloseInvestmentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #6730e3;
  border-color: #6730e3;
  background-color: #fff;
  cursor: pointer;

  color: #6730e3;

  transition: all 0.4s ease-out;

  & > svg {
    height: 25px;
    width: 25px;
  }

  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: #6730e3;
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    &:active {
      background-color: #6730e3;
      color: #fff;
    }
  }
`;
