import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  background-color: #533f92;
  border-radius: 4px;
  border: 2px solid #533f92;
  height: 10rem;
  width: 100%;

  border-radius: 1rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-flow: column;

  transition: all 0.3s ease-in;

  /* ${(props) =>
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
    `} */

  & > label {
    display: block;
    position: relative;
    width: fit-content;
    left: 10px;
    font-size: 0.8rem;
    color: #fff;
    background-color: inherit;
  }

  & > textarea {
    height: 100%;
    width: 100%;

    border: none;
    outline: none;
    font-size: 1rem;
    color: #fff;
    background-color: #533f92;

    &::placeholder {
      color: #a6a6a6;
    }

    &:focus {
      outline: none;
    }
  }

  /* ${(props) =>
    props.isFilled &&
    css`
        color #6730e3;
      `} */
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
