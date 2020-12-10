import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const AddSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 50px;
    height: 50px;

    color: #16bac5;
  }
`;

export const FormInvest = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  > input {
    margin-top: 10px;
  }

  > button {
    color: #f3fcf0;
    background-color: #0c8346;
  }

  > button:hover {
    color: #0c8346;
    background-color: #f3fcf0;
  }
`;
