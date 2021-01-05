import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
  margin-right: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #6730e3;
  border-radius: 5px 0 5px 5px;

  & > p {
    width: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #6730e3;
    color: #fff;
    font-weight: bold;
  }
`;

export const FeeInput = styled.input`
  height: 50px;
  outline: none;
  font-size: 25px;
  max-width: 10rem;
  text-align: center;
`;
