import React from 'react';
import { MdPowerSettingsNew } from 'react-icons/md';

import { Container, Content } from './styles';

interface SwitchButtonProps {
  isOn: boolean;
  onClick?(): void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  isOn = true,
  onClick,
}) => {
  return (
    <Container>
      <Content isOn={isOn}>
        <MdPowerSettingsNew size={25} onClick={onClick} />
      </Content>
    </Container>
  );
};

export default SwitchButton;
