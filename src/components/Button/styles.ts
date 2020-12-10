import styled from 'styled-components';

export const Container = styled.button`
  background: #6730e3;
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  width: 80%;
  margin-top: 20px;
  color: #fff;
  font-weight: 500;

  font-size: 18.75px;

  transition: all 0.2s ease-in;

  cursor: pointer;

  &:hover {
    background: #fff;
    color: #6730e3;
    border: 2px #6730e3 solid;
    box-shadow: 0 20px 30px 0 rgba(67, 37, 204, 0.2);
  }
`;
