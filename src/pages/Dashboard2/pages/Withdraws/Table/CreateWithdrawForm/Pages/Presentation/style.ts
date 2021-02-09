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
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: #fff;
  text-align: center;
`;

export const ControlButton = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
`;
