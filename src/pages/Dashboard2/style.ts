import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  min-height: 100vh;
  width: 100vw;

  padding: 1rem 1rem 1rem 0;

  background-color: #533f92;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: min-content auto;
  grid-template-rows: 1fr;

  grid-template-areas: 'sidebar page';

  background-color: #533f92;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto min-content;
    grid-template-areas: 'page' 'sidebar';
  }
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #533f92;
`;

export const PageContainer = styled.div`
  grid-area: page;
  display: grid;
  border-radius: 2rem;
  overflow: hidden;
  overflow-y: auto;
`;
