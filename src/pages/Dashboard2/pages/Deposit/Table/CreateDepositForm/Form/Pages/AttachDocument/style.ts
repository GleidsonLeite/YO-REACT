import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  height: 75%;
  display: grid;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  gap: 1rem;
`;

export const Presentation = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  align-self: center;
  justify-self: center;

  color: #fff;
`;

export const DepositSlipForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
