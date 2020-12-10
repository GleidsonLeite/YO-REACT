import React, { useCallback, useState } from 'react';
import {
  MdAttachMoney,
  MdCheckCircle,
  MdDelete,
  MdError,
  MdFileDownload,
} from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
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
}

const InvestmentPanel: React.FC<InvestmentPanelProps> = ({
  id,
  deposit_slip,
  value,
  created_at,
  updated_at,
  confirmed,
  isContentHidden = true,
}) => {
  const { role } = useRole();

  const [approved, setApproved] = useState(confirmed);

  const handleOnDownloadClick = useCallback(() => {
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
              <MdCheckCircle style={{ color: '#16bac5' }} />
            ) : (
              <MdError style={{ color: '#FF7700' }} />
            )}
            <MdFileDownload
              style={{ color: '#16bac5' }}
              onClick={handleOnDownloadClick}
            />
            {role.permission_value === 32 && (
              <MdCheckCircle
                onClick={handleOnClickDepositState}
                style={{ color: `${approved ? '#0C8346' : '#FF7700'}` }}
              />
            )}
            <MdDelete style={{ color: '#FF7700' }} />
          </ButtonsControl>
        </Info>
      </Content>
    </Container>
  );
};

export default InvestmentPanel;
