import React from 'react';

import { AuthProvider } from './Auth';
import { RoleProvider } from './Role';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RoleProvider>
      <ToastProvider>{children}</ToastProvider>
    </RoleProvider>
  </AuthProvider>
);

export default AppProvider;
