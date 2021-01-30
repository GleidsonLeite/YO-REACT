import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
`;

export const Content = styled(Form)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  gap: 1rem;
`;
