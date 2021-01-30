import styled from 'styled-components';

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;

  flex-direction: column;

  background-color: #533f92;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;

  label {
    display: block;
    position: relative;
    width: fit-content;
    left: 10px;
    font-size: 0.8rem;
    color: #fff;
    background-color: inherit;
  }

  input {
    height: 100%;
    width: 100%;

    border: none;
    outline: none;
    height: 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #533f92;

    &::placeholder {
      color: #a6a6a6;
    }
  }
`;
