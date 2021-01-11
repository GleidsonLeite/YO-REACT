import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
  width: 15rem;
  height: 8rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #fff;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-flow: row wrap;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--purple);

  width: 3rem;
  height: 3rem;

  border-radius: 0.5rem;

  & svg {
    color: white;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const TitleContent = styled.div`
  font-size: 0.6rem;
  color: var(--purple);
`;

export const ValueSection = styled.section`
  font-size: 1rem;
  color: var(--purple);
`;
