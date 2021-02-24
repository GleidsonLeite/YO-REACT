import styled from 'styled-components';

export const Container = styled.div`
  min-height: 0;
  width: 280px;
  height: 100%;
  display: flex;
  align-items: stretch;
  box-shadow: rgba(89, 102, 122, 0.1) 0 0 21px 0;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 15px 17px;
`;

export const BodyContainer = styled.div`
  min-height: 0;
  display: flex;
  justify-content: center;
  background-color: #fefefe;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
`;
