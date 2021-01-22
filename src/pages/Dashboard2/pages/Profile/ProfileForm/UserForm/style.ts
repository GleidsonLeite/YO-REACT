import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  align-items: center;
`;

export const Form = styled(Unform)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 1rem;
`;
