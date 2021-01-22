import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  width: 100%;

  display: grid;
  background-color: #6656a0;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  align-content: stretch;

  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'mailForm presentation';

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas: 'presentation' 'mailForm';
  }
`;
