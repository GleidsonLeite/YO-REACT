import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
`;

export const Content = styled.div`
  width: 100%;

  display: grid;
  align-content: center;

  align-items: center;

  overflow: hidden;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  background-color: var(--purple);
`;

export const ChartContainer = styled.div`
  width: 70%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  justify-content: stretch;
  justify-self: center;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
