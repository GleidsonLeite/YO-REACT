import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 2rem 0;
`;

export const FormContent = styled(Form)`
  width: 100%;
  height: 100%;

  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;

  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;
