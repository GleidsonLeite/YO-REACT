import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  background-color: ${darken(0.2, '#6730e3')};

  width: 100%;
  height: 100%;
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'icon' 'title' 'text';

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;

  padding: 1rem;
`;

export const IconDiv = styled.div`
  width: 10rem;
  height: 10rem;

  grid-area: icon;
  display: grid;
  justify-content: center;
  align-content: center;

  border-radius: 50%;
  border: 2px solid var(--purple);
  overflow: hidden;
  background-color: #fff;

  & > svg {
    width: 5rem;
    height: 5rem;
    color: var(--purple);
  }
`;

export const TitleDiv = styled.div`
  grid-area: title;
  width: 100%;
  color: #fff;
  display: grid;
  justify-content: center;

  @media screen and (max-width: 768px) {
    & > h1 {
      font-size: 1.5rem;
    }
  }
`;

export const TextDiv = styled.div`
  grid-area: text;

  display: grid;
  gap: 2px;

  align-items: center;
  align-content: center;

  width: 100%;
  color: #fff;

  & > p {
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    & > h2 {
      font-size: 1.2rem;
    }
  }
`;
