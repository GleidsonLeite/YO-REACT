import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 81px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  padding: 22px 30px;

  & > svg {
    cursor: pointer;
  }

  position: sticky;
`;
