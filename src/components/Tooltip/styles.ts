import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  > span {
    visibility: hidden;
    width: 120px;
    background-color: #16bac5;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }

  > span:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #16bac5 transparent transparent transparent;
  }

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;
