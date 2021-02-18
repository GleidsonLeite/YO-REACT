import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  grid-auto-columns: 1fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: min-content;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  color: #fff;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  align-content: center;
  gap: 1rem;
  padding: 0 4rem;
`;
