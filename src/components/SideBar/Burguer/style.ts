import styled from 'styled-components';

interface BurguerProps {
  isActive: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div<BurguerProps>`
  position: absolute;
  right: 0;
  top: 80px;

  color: ${({ isActive }) => (isActive ? '#fff' : '#312450')};

  border: 2px solid ${({ isActive }) => (isActive ? '#fff' : '#312450')};
  border-radius: 50%;

  transition: all ease-out 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 2rem;
    height: 2rem;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
`;
