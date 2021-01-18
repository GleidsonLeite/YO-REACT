import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  grid-template-areas: 'label' 'value';
  background-color: #fff;
  border: 1px solid #eaeaf6;
  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  overflow: hidden;
  padding: 0.3rem;
`;

export const Label = styled.div`
  grid-area: label;
  & > p {
    font-size: 0.8rem;
    color: ${darken(0.1, '#6730e3')};
  }
`;

export const InputValue = styled.textarea`
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${darken(0.1, '#6730e3')};

  min-height: 20rem;
`;
