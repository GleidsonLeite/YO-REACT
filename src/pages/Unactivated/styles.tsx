import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  background-color: #6730e3;
  border-radius: 20px;
  padding-bottom: 10px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-25px);

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #16bac5;
  border: 2px solid rgb(22, 186, 197);
  overflow: hidden;
  padding: 1px;

  > svg {
    color: white;
    width: 100%;
    height: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const FormPresentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex-wrap: wrap;

  height: 100%;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  color: #fff;

  > h1 {
    padding: 20px;
  }

  > p {
    margin: 2px;
    text-align: justify;
    line-height: 1.5;
  }
`;

export const ValidateForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 40%;
  > input {
    border: 2px solid red;
  }

  > button {
    background-color: #16bac5;
  }

  > button:hover {
    background-color: #fff;
    color: #16bac5;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
