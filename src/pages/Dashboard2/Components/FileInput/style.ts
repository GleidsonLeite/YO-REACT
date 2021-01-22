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

  p {
    font-size: 0.8rem;
    color: #fff;
  }

  label {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    svg {
      cursor: pointer;
      height: 100%;
      width: 90%;
    }
  }

  input {
    display: none;
  }
`;
