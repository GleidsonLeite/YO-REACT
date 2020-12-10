import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import Popup from '../components/Popup';

export interface PopupMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description: string;
  hasConfirmButton: boolean;
  onClickConfirmButton?(): void;
}

interface PopupContextData {
  showPopup(message: Omit<PopupMessage, 'id'>): void;
  removePopup(): void;
}

const PopupContext = createContext<PopupContextData>({} as PopupContextData);

const PopupProvidder: React.FC = ({ children }) => {
  const [message, setMessage] = useState<PopupMessage>({} as PopupMessage);

  const showPopup = useCallback(
    ({
      type,
      title,
      description,
      hasConfirmButton,
      onClickConfirmButton,
    }: Omit<PopupMessage, 'id'>) => {
      const id = uuid();
      const popup = {
        id,
        type,
        title,
        description,
        hasConfirmButton,
        onClickConfirmButton,
      };
      setMessage(popup);
    },
    [],
  );
  const removePopup = useCallback(() => {
    setMessage({} as PopupMessage);
  }, []);

  return (
    <PopupContext.Provider value={{ showPopup, removePopup }}>
      {children}
      <Popup message={message} />
    </PopupContext.Provider>
  );
};

function usePopup(): PopupContextData {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('useToast must be used within a PopupProvider');
  }

  return context;
}

export { PopupProvidder, usePopup };
