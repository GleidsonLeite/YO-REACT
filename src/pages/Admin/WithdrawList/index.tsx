import React, { useCallback, useEffect, useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdCheckCircle,
  MdCloudUpload,
  MdError,
  MdList,
  MdPowerSettingsNew,
} from 'react-icons/md';
import Card from '../../../components/Card';
import UploadButton from '../../../components/UploadButton';
import { UserData } from '../../../hooks/Auth';
import { WithdrawData } from '../../Dashboard';

import {
  Container,
  Content,
  Header,
  Filter,
  NameInputSearch,
  IsActivatedCheckBox,
  IsActivatedCheckBoxLabel,
  WithdrawContent,
  WithdrawIcons,
} from './styles';

interface WithdrawListProps {
  users: Array<UserData>;
  withdraws: Array<WithdrawData>;
  setWithdraws(withdraws: WithdrawData[]): void;
}

const WithdrawList: React.FC<WithdrawListProps> = ({ users, withdraws }) => {
  const [searchNameValue, setSearchNameValue] = useState('');

  const [withdrawsFiltered, setWithdrawsFiltered] = useState<WithdrawData[]>(
    [],
  );

  const [isWithdrawActivatedChecked, setIsWithdrawActivatedChecked] = useState(
    false,
  );

  const [
    isWithdrawDeactivatedChecked,
    setIsWithdrawDeactivatedChecked,
  ] = useState(false);

  const handleOnChangeSearchName = useCallback((event) => {
    setSearchNameValue(event.target.value);
  }, []);

  const handleOnClickActivatedCheckbox = useCallback(() => {
    !isWithdrawActivatedChecked && setIsWithdrawDeactivatedChecked(false);
    setIsWithdrawActivatedChecked(!isWithdrawActivatedChecked);
    if (!isWithdrawActivatedChecked) {
      setWithdrawsFiltered(
        withdraws.filter((withdraw) => {
          return withdraw.confirmed;
        }),
      );
    }
  }, [isWithdrawActivatedChecked, withdraws]);

  const handleOnClickDeactivatedCheckbox = useCallback(() => {
    !isWithdrawDeactivatedChecked && setIsWithdrawActivatedChecked(false);
    setIsWithdrawDeactivatedChecked(!isWithdrawDeactivatedChecked);
    if (!isWithdrawDeactivatedChecked) {
      setWithdrawsFiltered(
        withdraws.filter((withdraw) => {
          return !withdraw.confirmed;
        }),
      );
    }
  }, [withdraws, isWithdrawDeactivatedChecked]);

  useEffect(() => {
    setWithdrawsFiltered(() => {
      const withdrawsConfirmed = withdraws.filter((withdraw) => {
        if (isWithdrawActivatedChecked) {
          return withdraw.confirmed;
        }
        if (isWithdrawDeactivatedChecked) {
          return !withdraw.confirmed;
        }
        return withdraw;
      });
      const usersByName = users.filter((user) => {
        return user.name.includes(searchNameValue);
      });

      const withdrawsByUser = withdrawsConfirmed.filter((withdraw) => {
        return usersByName.some((user) => user.id === withdraw.investor_id);
      });

      return withdrawsByUser;
    });
  }, [
    withdraws,
    isWithdrawActivatedChecked,
    isWithdrawDeactivatedChecked,
    searchNameValue,
    users,
  ]);

  const getUsernameById = useCallback(
    (userId: string) => {
      const investor = users.find((user) => user.id === userId);
      return investor?.name;
    },
    [users],
  );

  return (
    <Container>
      <Content>
        <Header>
          <h2>Lista de Saques</h2>
          <MdList size={25} />
        </Header>
        <Filter>
          <NameInputSearch
            placeholder="Pesquise pelo nome"
            value={searchNameValue}
            onChange={handleOnChangeSearchName}
          />
          <IsActivatedCheckBox>
            {isWithdrawActivatedChecked ? (
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

            {isWithdrawDeactivatedChecked ? (
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
        <WithdrawContent>
          {withdrawsFiltered
            .sort((firstWithdraw, secondWithdraw) => {
              if (firstWithdraw.created_at < secondWithdraw.created_at) {
                return -1;
              }
              if (firstWithdraw.created_at > secondWithdraw.created_at) {
                return 1;
              }
              return 0;
            })
            .map((withdraw) => (
              <Card
                title={withdraw.value}
                description={`${getUsernameById(withdraw.investor_id)}`}
                key={withdraw.id}
              >
                <WithdrawIcons>
                  {withdraw.confirmed ? (
                    <>
                      <MdCheckCircle
                        style={{ color: '#16bac5' }}
                        key={withdraw.id}
                      />
                      <MdPowerSettingsNew style={{ color: '#16bac5' }} />
                    </>
                  ) : (
                    <>
                      <MdError style={{ color: '#FF7700' }} key={withdraw.id} />
                      <MdPowerSettingsNew style={{ color: '#FF7700' }} />
                      <UploadButton
                        id={withdraw.id}
                        icon={MdCloudUpload}
                        // eslint-disable-next-line no-console
                        handleOnFileChange={() => console.log('')}
                      />
                    </>
                  )}
                </WithdrawIcons>
              </Card>
            ))}
        </WithdrawContent>
      </Content>
    </Container>
  );
};

export default WithdrawList;
