import styled, { css } from 'styled-components';

interface ContainerProps {
  isContentHidden: boolean;
}

export const Container = styled.div<ContainerProps>`
  min-height: 0;
  width: 280px;
  height: 100%;
  display: flex;
  align-items: stretch;
  box-shadow: rgba(89, 102, 122, 0.1) 0 0 21px 0;

  transition: all 0.3s ease-in;

  ${(props) =>
    props.isContentHidden &&
    css`
      transform: translateX(-100%);
    `}

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 70%;
    height: 100vh;
    z-index: 2;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: 82px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 27px 30px;

  & > svg {
    cursor: pointer;
  }
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
