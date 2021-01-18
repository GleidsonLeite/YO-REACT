import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  display: grid;
  margin: 0 0.5rem;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-content: center;
  align-content: center;

  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: 'photo' 'navlist' 'exit';

  @media screen and (max-width: 768px) {
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: 'photo navlist exit';
    align-items: center;
    justify-items: center;
  }
`;

export const ProfilePhoto = styled.div`
  grid-area: photo;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  & > svg {
    width: 100%;
    height: 100%;

    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Nav = styled.nav`
  grid-area: navlist;
  width: 100%;
  height: 100%;

  display: grid;

  align-self: center;
`;

export const ReturnToHome = styled.footer`
  grid-area: exit;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: right;

  & > svg {
    color: #fff;
    width: 2rem;
    height: 2rem;
  }
`;
