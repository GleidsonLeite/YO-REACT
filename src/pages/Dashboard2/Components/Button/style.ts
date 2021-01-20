import styled from 'styled-components';

export const Container = styled.button`
  height: 4rem;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;

  border: none;
  outline: none;
  font-size: 1rem;
  color: #fff;
  background-color: #533f92;

  cursor: pointer;

  transition: all 0.1s ease;

  &:active {
    border: 0.1rem solid #00a9a5;
    color: #00a9a5;
  }
`;