import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ff4d80;

  color: #f3fcf0;
  font-family: Montserrat;
  letter-spacing: 2px;
  font-size: 20px;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  margin-top: 10px;

  font-size: 15px;
  letter-spacing: 1px;
`;

export const ButtonsControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  padding: 10px;

  > svg {
    width: 25px;
    height: 25px;

    cursor: pointer;
  }
`;
