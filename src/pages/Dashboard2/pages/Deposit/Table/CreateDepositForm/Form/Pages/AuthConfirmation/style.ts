import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  height: 75%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  & > h1 {
    color: #fff;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const Content = styled(Form)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 1rem;
`;
