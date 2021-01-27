import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
  grid-template-columns: repeat(8, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
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
