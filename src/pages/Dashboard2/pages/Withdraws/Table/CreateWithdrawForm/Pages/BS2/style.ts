import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  grid-auto-columns: 1fr;
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  color: #fff;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 4rem;
  flex-flow: column wrap;
`;
