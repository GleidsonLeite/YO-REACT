import React, { useCallback, useEffect, useState } from 'react';
import {
  MdAttachMoney,
  MdDelete,
  MdError,
  MdVerifiedUser,
} from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { useRole } from '../../../hooks/Role';

import {
  Container,
  Content,
  Value,
  Info,
  ButtonsControl,
} from '../InvestmentPanel/styles';

interface WithdrawPanelProps {
  id: string;
  investor_id: string;
  value: string;
  created_at: string;
  updated_at: string;
  confirmed: boolean;
  confirming_user_id: string;
  data_confirmed: string;
  isContentHidden?: boolean;
}

const WithdrawPanel: React.FC<WithdrawPanelProps> = ({
  id,
  confirmed,
  value,
  isContentHidden,
  created_at,
  updated_at,
}) => {
  const { role } = useRole();

  const [approved, setApproved] = useState(confirmed);

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
          {!isContentHidden && (
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

            {!approved && <MdDelete style={{ color: '#FF7700' }} />}
          </ButtonsControl>
        </Info>
      </Content>
    </Container>
  );
};

export default WithdrawPanel;
