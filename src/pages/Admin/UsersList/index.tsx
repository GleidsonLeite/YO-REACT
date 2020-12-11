import React, { useCallback, useEffect, useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdCheckCircle,
  MdError,
  MdFilterList,
} from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Card from '../../../components/Card';
import { UserData } from '../../../hooks/Auth';

import {
  Container,
  Content,
  Filter,
  Header,
  IsActivatedCheckBox,
  IsActivatedCheckBoxLabel,
  NameInputSearch,
  UsersContent,
} from './styles';

interface UsersListProps {
  users: Array<UserData>;
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const [usersFiltered, setUsersFiltered] = useState<UserData[]>([]);

  const [isUserActivatedChecked, setIsUserActivatedChecked] = useState(false);
  const [isUserDeactivatedChecked, setIsUserDeactivatedChecked] = useState(
    false,
  );
  const [searchNameValue, setSearchNameValue] = useState('');

  const history = useHistory();

  const handleOnClickActivatedCheckbox = useCallback(() => {
    !isUserActivatedChecked && setIsUserDeactivatedChecked(false);
    setIsUserActivatedChecked(!isUserActivatedChecked);
    if (isUserActivatedChecked) {
      setUsersFiltered(
        users.filter((user) => {
          return user.activated;
        }),
      );
    }
  }, [isUserActivatedChecked, users]);

  const handleOnClickDeactivatedCheckbox = useCallback(() => {
    !isUserDeactivatedChecked && setIsUserActivatedChecked(false);
    setIsUserDeactivatedChecked(!isUserDeactivatedChecked);
    if (isUserDeactivatedChecked) {
      setUsersFiltered(
        users.filter((user) => {
          return !user.activated;
        }),
      );
    }
  }, [isUserDeactivatedChecked, users]);

  const handleOnChangeSearchName = useCallback((event) => {
    setSearchNameValue(event.target.value);
  }, []);

  useEffect(() => {
    setUsersFiltered(() => {
      const usersActivated = users.filter((user) => {
        if (isUserActivatedChecked) {
          return user.activated;
        }
        if (isUserDeactivatedChecked) {
          return !user.activated;
        }
        return user;
      });
      const usersByName = usersActivated.filter((user) => {
        return user.name.includes(searchNameValue);
      });

      return usersByName;
    });
  }, [
    isUserActivatedChecked,
    isUserDeactivatedChecked,
    searchNameValue,
    users,
  ]);

  return (
    <Container>
      <Content>
        <Header>
          <h1>Lista de Usuários</h1>
          <MdFilterList size={25} />
        </Header>
        <Filter>
          <NameInputSearch
            placeholder="Pesquise pelo nome"
            value={searchNameValue}
            onChange={handleOnChangeSearchName}
          />
          <IsActivatedCheckBox>
            {isUserActivatedChecked ? (
              <MdCheckBox
                id="ativado"
                size={25}
                style={{ color: '#16bac5' }}
                onClick={handleOnClickActivatedCheckbox}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                id="ativado"
                size={25}
                style={{ color: '#16bac5' }}
                onClick={handleOnClickActivatedCheckbox}
              />
            )}
            <IsActivatedCheckBoxLabel
              htmlFor="ativado"
              onClick={handleOnClickActivatedCheckbox}
            >
              Ativado
            </IsActivatedCheckBoxLabel>

            {isUserDeactivatedChecked ? (
              <MdCheckBox
                id="desativado"
                size={25}
                style={{ color: '#FF7700' }}
                onClick={handleOnClickDeactivatedCheckbox}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                id="desativado"
                size={25}
                style={{ color: '#FF7700' }}
                onClick={handleOnClickDeactivatedCheckbox}
              />
            )}
            <IsActivatedCheckBoxLabel
              htmlFor="desativado"
              onClick={handleOnClickDeactivatedCheckbox}
            >
              Desativado
            </IsActivatedCheckBoxLabel>
          </IsActivatedCheckBox>
        </Filter>
        <UsersContent>
          {usersFiltered
            .sort((firstUser, secondUser) => {
              if (firstUser.name < secondUser.name) {
                return -1;
              }
              if (firstUser.name > secondUser.name) {
                return 1;
              }
              return 0;
            })
            .map((user) => (
              <Card
                handleOnClick={() => history.push(`/user/${user.id}`)}
                title={user.name}
                description={user.email}
                amount={user.amount}
                key={user.id}
              >
                {user.activated ? (
                  <MdCheckCircle
                    size={25}
                    style={{ color: '#16bac5' }}
                    key={user.id}
                  />
                ) : (
                  <MdError
                    size={25}
                    style={{ color: '#FF7700' }}
                    key={user.id}
                  />
                )}
              </Card>
            ))}
        </UsersContent>
      </Content>
    </Container>
  );
};

export default UsersList;
