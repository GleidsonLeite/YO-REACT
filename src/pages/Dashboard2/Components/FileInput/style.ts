import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 'label' 'value' 'footer';
  align-content: center;

  background-color: #533f92;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;

  & > p {
    font-size: 0.8rem;
    color: #fff;
  }

  & > label {
    justify-self: center;
    align-self: center;
    color: white;

    cursor: pointer;
  }

  & > svg {
    width: 4rem;
    height: 4rem;
    color: #fff;

    cursor: pointer;
  }

  & > input {
    display: none;
  }
`;
