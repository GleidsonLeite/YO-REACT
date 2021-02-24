import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(3, 0.5fr);
  grid-template-rows: repeat(3, min-content);

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;

  gap: 2rem;
  padding: 1rem;
`;
