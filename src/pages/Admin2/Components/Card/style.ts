import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-rows: 1fr;

  border-radius: 1rem;
  background-color: #fff;

  box-shadow: 7px 6px 5px 0px rgba(89, 102, 122, 0.1);
  padding: 0 1rem;

  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  & > h2 {
    font-size: 18px;
  }

  & > h1 {
    font-size: 24px;
  }

  & > h4 {
    color: rgba(43, 43, 43, 0.7);
    font-size: 14px;
  }
`;

export const ChildrenContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  align-items: center;
  gap: 0.2rem;
`;
