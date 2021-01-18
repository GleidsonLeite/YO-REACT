import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: grid;
  background-color: #eaeaf6;
  padding: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: 'editform profile';

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 3fr;
    grid-template-areas: 'profile' 'editform';
  }

  gap: 2rem;

  background-color: #f4f4fc;
  border-radius: 2rem;
  overflow: hidden;
`;

export const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  grid-area: profile;
  display: grid;
`;

export const EditForm = styled.div`
  width: 100%;
  height: 100%;
  grid-area: editform;
  display: grid;
  justify-content: stretch;
  padding: 1rem;
`;
