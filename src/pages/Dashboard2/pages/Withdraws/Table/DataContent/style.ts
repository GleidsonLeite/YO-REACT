import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: #fff;
  background-color: #00bfb2;
  & > div:nth-of-type(even) {
    background-color: #533f92;
  }
`;
