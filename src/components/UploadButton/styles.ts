import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      color: #16bac5;
    }
  }

  input {
    display: none;
  }
`;
