import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  border-left: 2px solid #6730e3;
  width: 80%;
  color: #6730e3;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in;

  ${(props) =>
    props.isErrored &&
    css`
      border-left: 2px #ff7700 solid;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px #6730e3 solid;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border: 2px #6730e3 solid;
    `}

  > textarea {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #6730e3;
    font-size: 16px;

    min-height: 100px;
    padding: 10px;

    &:focus {
      outline: none;
    }
  }

  ${(props) =>
    props.isFilled &&
    css`
        color #6730e3;
      `}
`;

export const Error = styled.div`
  height: 20px;
  cursor: pointer;

  svg {
    margin: 2px;
  }

  span {
    background: #ff7700;
    color: #fff;

    &::before {
      border-color: #ff7700 transparent;
    }
  }
`;
