import React, { useCallback, useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdCheckCircle,
  MdError,
  MdFileDownload,
  MdList,
  MdPowerSettingsNew,
} from 'react-icons/md';
import Card from '../../../components/Card';
import { UserData } from '../../../hooks/Auth';
import api from '../../../services/api';
import { InvestmentData } from '../../Dashboard';

import {
  Container,
  Content,
  Header,
  Filter,
  NameInputSearch,
  IsActivatedCheckBox,
  IsActivatedCheckBoxLabel,
  InvestmentsContent,
  InvestmentsIcons,
} from './styles';

interface InvestmentListProps {
  users: Array<UserData>;
  investments: Array<InvestmentData>;
  setInvestments(Investments: InvestmentData[]): void;
}

const InvestmentList: React.FC<InvestmentListProps> = ({
  users,
  investments,
  setInvestments,
}) => {
  const [searchNameValue, setSearchNameValue] = useState('');

  const [
    isInvestmentActivatedChecked,
    setIsInvestmentActivatedChecked,
  ] = useState(false);

  const [
    isInvestmentDeactivatedChecked,
    setIsInvestmentDeactivatedChecked,
  ] = useState(false);

  const handleOnChangeSearchName = useCallback((event) => {
    setSearchNameValue(event.target.value);
  }, []);

  const getUsernameById = useCallback(
    (userId: string) => {
      const investor = users.find((user) => user.id === userId);
      return investor?.name;
    },
    [users],
  );

  const handleOnDownloadClick = useCallback(
    ({ id, deposit_slip }: InvestmentData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };
      api.get(`/investments/download/${id}`, config).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${deposit_slip}`);
        document.body.appendChild(link);
        link.click();
      });
    },
    [],
  );

  const handleOnClickDepositState = useCallback(
    async ({ id, confirmed }: InvestmentData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };
      const response = await api.patch(
        `/investments/confirm/${id}`,
        { confirmed: !confirmed },
        config,
      );

      const investmentFromResponse = response.data as InvestmentData;
      setInvestments([
        ...investments.filter((investment) => investment.id !== id),
        investmentFromResponse,
      ]);
    },
    [investments, setInvestments],
  );

  return (
    <Container>
      <Content>
        <Header>
          <h1>Lista de Investimentos</h1>
          <MdList size={25} />
        </Header>
        <Filter>
          <NameInputSearch
            placeholder="Pesquise pelo nome"
            value={searchNameValue}
            onChange={handleOnChangeSearchName}
          />
          <IsActivatedCheckBox>
            {isInvestmentActivatedChecked ? (
              <MdCheckBox
                id="ativado"
                size={25}
                style={{ color: '#16bac5' }}
                // onClick={handleOnClickActivatedCheckbox}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                id="ativado"
                size={25}
                style={{ color: '#16bac5' }}
                // onClick={handleOnClickActivatedCheckbox}
              />
            )}
            <IsActivatedCheckBoxLabel
              htmlFor="ativado"
              // onClick={handleOnClickActivatedCheckbox}
            >
              Ativado
            </IsActivatedCheckBoxLabel>

            {isInvestmentDeactivatedChecked ? (
              <MdCheckBox
                id="desativado"
                size={25}
                style={{ color: '#FF7700' }}
                // onClick={handleOnClickDeactivatedCheckbox}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                id="desativado"
                size={25}
                style={{ color: '#FF7700' }}
                // onClick={handleOnClickDeactivatedCheckbox}
              />
            )}
            <IsActivatedCheckBoxLabel
              htmlFor="desativado"
              // onClick={handleOnClickDeactivatedCheckbox}
            >
              Desativado
            </IsActivatedCheckBoxLabel>
          </IsActivatedCheckBox>
        </Filter>
        <InvestmentsContent>
          {investments
            .sort((firstInvestment, secondInvestment) => {
              if (firstInvestment.created_at < secondInvestment.created_at) {
                return -1;
              }
              if (firstInvestment.created_at > secondInvestment.created_at) {
                return 1;
              }
              return 0;
            })
            .map((investment) => (
              <Card
                title={investment.value}
                description={`${getUsernameById(investment.investor_id)}`}
                key={investment.id}
              >
                <InvestmentsIcons>
                  {investment.confirmed ? (
                    <>
                      <MdCheckCircle
                        style={{ color: '#16bac5' }}
                        key={investment.id}
                      />
                      <MdPowerSettingsNew
                        style={{ color: '#16bac5' }}
                        onClick={() => handleOnClickDepositState(investment)}
                      />
                    </>
                  ) : (
                    <>
                      <MdError
                        style={{ color: '#FF7700' }}
                        key={investment.id}
                      />
                      <MdPowerSettingsNew
                        style={{ color: '#FF7700' }}
                        onClick={() => handleOnClickDepositState(investment)}
                      />
                    </>
                  )}
                  <MdFileDownload
                    style={{ color: '#16bac5' }}
                    onClick={() => handleOnDownloadClick(investment)}
                  />
                </InvestmentsIcons>
              </Card>
            ))}
        </InvestmentsContent>
      </Content>
    </Container>
  );
};

export default InvestmentList;
