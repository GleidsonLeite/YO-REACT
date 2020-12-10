import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  border: 0;
  border-radius: 50%;
  background-color: #0c8346;

  > input {
    text-align: center;
    outline: none;
    max-width: 100px;
    background-color: #0c8346;
    border: none;

    color: #f3fcf0;
    font-family: Montserrat;
    letter-spacing: 2px;
    font-size: 20px;
  }

  > input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  > input[type='number'] {
    -moz-appearance: textfield;
  }
`;
