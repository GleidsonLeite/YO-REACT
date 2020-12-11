import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  border-left: 2px solid #6730e3;

  width: 100%;
  color: #6730e3;

  margin-top: 20px;

  > input {
    width: 100%;
    padding: 10px;
  }

  > input:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  > input:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
