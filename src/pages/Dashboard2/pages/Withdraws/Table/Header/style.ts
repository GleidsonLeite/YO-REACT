import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  align-items: center;

  background-color: #533f92;
  padding: 1rem 0;

  & > h1 {
    font-size: 1rem;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
