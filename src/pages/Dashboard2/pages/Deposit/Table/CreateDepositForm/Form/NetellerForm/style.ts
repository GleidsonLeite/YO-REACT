import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  height: 75%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  & > h1 {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
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
