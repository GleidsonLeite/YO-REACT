import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Content = styled.div`
  background-color: #533f92;

  width: 100%;
  height: 100%;
  display: grid;

  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'photo' 'name';

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;

  border-radius: 2rem;
`;

export const Photo = styled.div`
  grid-area: photo;
  display: grid;
  align-self: center;
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
  display: grid;
  justify-content: center;
  width: 100%;
  color: #fff;
`;
