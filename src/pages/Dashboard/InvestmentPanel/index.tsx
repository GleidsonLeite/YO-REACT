import React, { useCallback, useState } from 'react';
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdError,
  MdFileDownload,
  MdFileUpload,
  MdPowerSettingsNew,
  MdReceipt,
  MdVerifiedUser,
} from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import UploadButton from '../../../components/UploadButton';
import { useRole } from '../../../hooks/Role';
import api from '../../../services/api';

import { ButtonsControl, Container, Content, Info, Value } from './styles';

interface InvestmentPanelProps {
  id: string;
  deposit_slip: string;
  value: string;
  created_at: string;
  updated_at: string;
  confirmed: boolean;
  isContentHidden?: boolean;
  bank_slip: string;
}

const InvestmentPanel: React.FC<InvestmentPanelProps> = ({
  id,
  deposit_slip,
  value,
  created_at,
  updated_at,
  confirmed,
  bank_slip,
  isContentHidden = true,
}) => {
  const { role } = useRole();

  const [approved, setApproved] = useState(confirmed);

  const handleOnDownloadDepositSlipClick = useCallback(() => {
    api
      .get(`/investments/download/DepositSlip/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.data.type }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${deposit_slip}`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }, [deposit_slip, id]);

  const handleOnClickDepositState = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = await api.patch(
      `/investments/confirm/${id}`,
      { confirmed: !approved },
      config,
    );

    setApproved(response.data.confirmed);
  }, [approved, id]);

  const handleOnDownloadBankSlipClick = useCallback(() => {
    api
      .get(`/investments/download/BankSlip/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
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
  }, [bank_slip, id]);

  const handleOnUploadDepositSlipClick = useCallback(
    async (event) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };

      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('investment_id', id);

      await api.patch('investments/setDepositSlip', formData, config);
    },
    [id],
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
      formData.append('investment_id', id);

      await api.patch('investments/setBankSlip', formData, config);
    },
    [id],
  );

  const { number } = useSpring({
    number: Number(
      (() => {
        return Number(value.replace(/\$/g, ''));
      })(),
    ),
    from: { number: 0 },
    delay: 1000,
  });

  const formatDate = useCallback((date: string): string => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hour = d.getHours();
    const minute = d.getMinutes();
    return `${day}/${month}/${year} às ${hour}:${minute}`;
  }, []);

  return (
    <Container>
      <Content>
        <Value>
          <MdAttachMoney size={15} />
          {isContentHidden && (
            <animated.span>
              {number.interpolate((x) => x.toFixed(0))}
            </animated.span>
          )}
        </Value>
        <Info>
          <h3>{`Criado em ${formatDate(created_at)}`}</h3>
          <h3>{`Atualizado em ${formatDate(updated_at)}`}</h3>

          <ButtonsControl>
            {approved ? (
              <MdVerifiedUser style={{ color: '#16bac5' }} />
            ) : (
              <MdError style={{ color: '#FF7700' }} />
            )}

            {role.permission_value === 32 && !approved && (
              <UploadButton
                id={id}
                icon={MdCloudUpload}
                handleOnFileChange={handleOnUploadBankSlipClick}
              />
            )}
            {!!bank_slip && (
              <MdReceipt
                style={{ color: '#16bac5' }}
                onClick={handleOnDownloadBankSlipClick}
              />
            )}

            {!approved && !!bank_slip && (
              <UploadButton
                id={id}
                icon={MdFileUpload}
                handleOnFileChange={handleOnUploadDepositSlipClick}
              />
            )}
            {!!deposit_slip && (
              <MdFileDownload
                style={{ color: '#16bac5' }}
                onClick={handleOnDownloadDepositSlipClick}
              />
            )}
            {!approved && <MdDelete style={{ color: '#FF7700' }} />}

            {role.permission_value === 32 && (
              <MdPowerSettingsNew
                onClick={handleOnClickDepositState}
                style={{ color: `${approved ? '#0C8346' : '#FF7700'}` }}
              />
            )}
          </ButtonsControl>
        </Info>
      </Content>
    </Container>
  );
};

export default InvestmentPanel;
