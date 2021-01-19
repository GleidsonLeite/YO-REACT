import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'label' 'value';
  background-color: #533f92;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;
`;

export const Label = styled.label`
  grid-area: label;
  display: grid;
  align-self: center;
  & > p {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const InputValue = styled.input`
  display: grid;
  align-self: center;

  border: none;
  outline: none;
  height: 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #533f92;

  &::placeholder {
    color: #a6a6a6;
  }
`;
