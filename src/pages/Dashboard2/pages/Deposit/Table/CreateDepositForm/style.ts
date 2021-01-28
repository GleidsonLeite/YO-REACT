import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1rem;
  background-color: #00bfb2;
`;

export const CreateInvestmentButton = styled.div`
  height: 3rem;
  width: 12rem;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

  padding: 0.5rem;
  background-color: #533f92;
  color: #00bfb2;
  font-weight: bold;
  border-radius: 1rem;
  border: 2px solid transparent;

  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;
