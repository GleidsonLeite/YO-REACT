import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;

  max-width: 400px;
  background-color: #6730e3;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);

  color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 10rem;
  margin: 15px 0;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${lighten(0.1, '#6730e3')};

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  font-size: 25px;
`;
