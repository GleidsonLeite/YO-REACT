import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
