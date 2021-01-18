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

  grid-template-rows: 4fr 1fr;
  grid-template-areas: 'photo' 'name';

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;
`;

export const Photo = styled.div`
  grid-area: photo;
  display: grid;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 2px solid var(--purple);

  overflow: hidden;

  & > img {
    width: 10rem;
    height: 10rem;
  }
`;

export const NameDiv = styled.div`
  grid-area: name;
  width: 100%;
  color: #fff;
`;
