import styled from 'styled-components';

export const Container = styled.button`
  background: #6730e3;
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  font-weight: 500;

  font-size: 18.75px;

  transition: all 0.5s ease-out;

  cursor: pointer;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background: #fff;
    color: #6730e3;
    border: 2px #6730e3 solid;
  }
`;
