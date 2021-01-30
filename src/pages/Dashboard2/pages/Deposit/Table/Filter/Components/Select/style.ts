import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content min-content;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  & > label {
    color: #00bfb2;
    font-weight: bold;
  }
`;

export const SelectContainer = styled.select`
  color: #fff;
  font-weight: bold;
  background-color: #00bfb2;
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;

  & > option:nth-of-type(even) {
    background-color: #533f92;
  }
  & > option:focus {
    background: #6656a0;
  }
`;
