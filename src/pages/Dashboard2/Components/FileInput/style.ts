import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 4.9fr;
  grid-template-areas: 'label' 'value';
  align-content: center;

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

export const Icon = styled.label`
  display: grid;

  justify-self: center;
  align-self: center;

  justify-items: center;

  & > svg {
    width: 4rem;
    height: 4rem;
    color: var(--purple);

    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: none;
`;
