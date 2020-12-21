import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 0;
  padding: 0;
  border: 10px solid #6730e3;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 5rem;
  background-color: #6730e3;
  color: white;
  > svg {
    margin-left: 10px;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #6730e3;
  width: 100%;
`;

export const NameInputSearch = styled.input`
  width: 20%;
  border: 2px solid #fff;
  border-radius: 4px;
  margin: 8px;
  outline: none;
  padding: 8px;

  &:focus {
    box-shadow: 0 0 4px 0 #fff;
  }
`;

export const IsActivatedCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IsActivatedCheckBoxLabel = styled.label`
  cursor: pointer;
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
`;

export const UsersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: colum;
  flex-wrap: wrap;
  padding: 10px;

  > div {
    margin: 10px;
    width: 20rem;
    max-width: 20rem;
  }
`;
