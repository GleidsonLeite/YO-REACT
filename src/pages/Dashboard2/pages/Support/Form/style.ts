import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 1rem;
  background-color: #6656a0;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const FormContent = styled(Form)`
  width: 100%;
  height: 100%;

  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;
