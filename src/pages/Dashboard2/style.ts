import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  height: 100vh;
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

  overflow: hidden;

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
  overflow-y: auto;
  overflow-x: hidden;

  background: transparent;

  &::-webkit-scrollbar {
    display: block;
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px; */
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    height: 4rem;
  }
`;
