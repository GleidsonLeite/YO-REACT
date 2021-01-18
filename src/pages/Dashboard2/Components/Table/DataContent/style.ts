import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-areas: 'header' 'content';
`;

export const Header = styled.div`
  width: 100%;

  grid-area: header;

  display: grid;
  grid-auto-flow: column;
  align-self: center;
  justify-content: stretch;
  justify-items: center;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Data = styled.div`
  width: 100%;
  grid-area: content;
  display: grid;
  justify-content: stretch;
  justify-items: center;
`;

export const SingleData = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-self: center;
  justify-content: stretch;
  justify-items: center;

  font-weight: lighter;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
