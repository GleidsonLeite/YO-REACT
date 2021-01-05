import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const UserInformationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  color: white;

  flex-direction: column;
`;

export const UserStatusControlDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
