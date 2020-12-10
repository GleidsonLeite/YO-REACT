import React from 'react';

import { AuthProvider } from './Auth';
import { PopupProvidder } from './Popup';
import { RoleProvider } from './Role';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RoleProvider>
      <ToastProvider>
        <PopupProvidder>{children}</PopupProvidder>
      </ToastProvider>
    </RoleProvider>
  </AuthProvider>
);

export default AppProvider;
