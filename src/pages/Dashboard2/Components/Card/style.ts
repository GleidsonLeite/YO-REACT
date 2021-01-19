import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8rem;

  display: grid;

  @media screen and (max-width: 768px) {
    height: 5rem;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'header' 'footer';
  justify-content: space-evenly;
  align-content: space-evenly;

  justify-items: center;

  background-color: var(--purple);
  border-radius: 1rem;
  border: 2px solid var(--purple);

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  width: 100%;

  grid-area: header;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'icon title';
  grid-gap: 2px;

  justify-content: stretch;
  align-items: center;

  padding: 2px;
`;

export const IconContainer = styled.div`
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00a9a5;

  width: 3rem;
  height: 3rem;

  border-radius: 0.5rem;

  & > svg {
    color: #fff;
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;

    & > svg {
      color: #fff;
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const TitleContent = styled.div`
  grid-area: title;
  display: grid;
  justify-self: center;
  font-size: 0.6rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }
`;

export const ValueSection = styled.section`
  grid-area: footer;
  display: grid;
  align-self: center;
  justify-self: center;

  color: #fff;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
