import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  width: 100%;

  display: grid;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'mailForm presentation';

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
    grid-template-areas: 'presentation' 'mailForm';
  }

  gap: 1rem;
`;
