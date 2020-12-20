import React, { useCallback, useEffect, useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdCheckCircle,
  MdError,
  MdFileDownload,
  MdFileUpload,
  MdList,
  MdPowerSettingsNew,
  MdReceipt,
} from 'react-icons/md';
import Card from '../../../components/Card';
import UploadButton from '../../../components/UploadButton';
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

  const [investmentsFiltered, setInvestmentsFiltered] = useState<
    InvestmentData[]
  >([]);

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

  const handleOnClickActivatedCheckbox = useCallback(() => {
    !isInvestmentActivatedChecked && setIsInvestmentDeactivatedChecked(false);
    setIsInvestmentActivatedChecked(!isInvestmentActivatedChecked);
    if (!isInvestmentActivatedChecked) {
      setInvestmentsFiltered(
        investments.filter((investment) => {
          return investment.confirmed;
        }),
      );
    }
  }, [investments, isInvestmentActivatedChecked]);

  const handleOnClickDeactivatedCheckbox = useCallback(() => {
    !isInvestmentDeactivatedChecked && setIsInvestmentActivatedChecked(false);
    setIsInvestmentDeactivatedChecked(!isInvestmentDeactivatedChecked);
    if (!isInvestmentDeactivatedChecked) {
      setInvestmentsFiltered(
        investments.filter((investment) => {
          return !investment.confirmed;
        }),
      );
    }
  }, [investments, isInvestmentDeactivatedChecked]);

  useEffect(() => {
    setInvestmentsFiltered(() => {
      const investmentsConfirmed = investments.filter((investment) => {
        if (isInvestmentActivatedChecked) {
          return investment.confirmed;
        }
        if (isInvestmentDeactivatedChecked) {
          return !investment.confirmed;
        }
        return investment;
      });
      const usersByName = users.filter((user) => {
        return user.name.includes(searchNameValue);
      });

      const investmentsByUser = investmentsConfirmed.filter((investment) => {
        return usersByName.some((user) => user.id === investment.investor_id);
      });

      return investmentsByUser;
    });
  }, [
    investments,
    isInvestmentActivatedChecked,
    isInvestmentDeactivatedChecked,
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

  const handleOnUploadBankSlipClick = useCallback(
    async (event) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };

      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('investment_id', event.target.id);

      const investmentResponse = (await api.patch(
        'investments/setBankSlip',
        formData,
        config,
      )) as InvestmentData;

      setInvestments([
        ...investments.filter(
          (investment) => investment.id !== investmentResponse.id,
        ),
        investmentResponse,
      ]);
    },
    [investments, setInvestments],
  );

  const handleOnDownloadDepositSlipClick = useCallback(
    ({ id, deposit_slip }: InvestmentData) => {
      api
        .get(`/investments/download/DepositSlip/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
            responseType: 'blob',
          },
          responseType: 'arraybuffer',
        })
        .then((response) => {
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

  const handleOnDownloadBankSlipClick = useCallback(
    ({ id, bank_slip }: InvestmentData) => {
      api
        .get(`/investments/download/BankSlip/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
          responseType: 'arraybuffer',
        })
        .then((response) => {
          console.log(response);
          const url = window.URL.createObjectURL(
            new Blob([response.data], { type: response.data.type }),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${bank_slip}`);
          document.body.appendChild(link);
          link.click();
          link.remove();
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
      setInvestmentsFiltered(investments);
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

            {isInvestmentDeactivatedChecked ? (
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
        <InvestmentsContent>
          {investmentsFiltered
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
                      <UploadButton
                        id={investment.id}
                        icon={MdFileUpload}
                        handleOnFileChange={handleOnUploadBankSlipClick}
                      />
                      {!!investment.bank_slip && (
                        <MdReceipt
                          style={{ color: '#16bac5' }}
                          onClick={
                            () => handleOnDownloadBankSlipClick(investment)
                            // eslint-disable-next-line react/jsx-curly-newline
                          }
                        />
                      )}
                    </>
                  )}
                  {!!investment.deposit_slip && (
                    <MdFileDownload
                      style={{ color: '#16bac5' }}
                      // eslint-disable-next-line prettier/prettier
                      onClick={() => handleOnDownloadDepositSlipClick(investment)}
                    />
                  )}
                </InvestmentsIcons>
              </Card>
            ))}
        </InvestmentsContent>
      </Content>
    </Container>
  );
};

export default InvestmentList;
