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
  grid-auto-columns: 1fr;

  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 4rem;

  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: #fff;
  text-align: center;
  align-self: center;
`;

export const ControlButton = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
`;
