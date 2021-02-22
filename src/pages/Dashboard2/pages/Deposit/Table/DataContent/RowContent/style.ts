import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  align-items: center;
  justify-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    gap: 0.5rem;

    & > p {
      width: 100%;
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
    }

    & > p::before {
      content: attr(data-label);
    }
  }
`;
