import React, { useCallback, useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { Container, Box } from './style';

interface CheckBoxProps {
  label: string;
  defaultChecked?: boolean;
  handleOnCheck(): void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  defaultChecked,
  handleOnCheck,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || false);

  const handleOnClick = useCallback(() => {
    setIsChecked(!isChecked);
    handleOnCheck();
  }, [handleOnCheck, isChecked]);

  return (
    <Container>
      <p>{label}</p>
      <Box onClick={handleOnClick}>
        {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Box>
    </Container>
  );
};

export default CheckBox;
