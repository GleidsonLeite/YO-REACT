import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  background-color: #6656a0;
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

  gap: 1rem;
  padding: 1rem;

  border-radius: 2rem;
`;

export const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  grid-area: profile;
  display: grid;
  border-radius: 2rem;
`;

export const EditForm = styled.div`
  width: 100%;
  height: 100%;
  grid-area: editform;
  display: grid;
  justify-content: stretch;
`;
