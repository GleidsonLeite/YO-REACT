import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;

  gap: 2rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: rows;
    grid-auto-rows: 1fr;
  }
`;
