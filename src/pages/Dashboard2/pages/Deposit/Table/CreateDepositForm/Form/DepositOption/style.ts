import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
  }
`;

export const PresentationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: #fff;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  gap: 1rem;
`;
