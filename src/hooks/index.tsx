import React from 'react';

import { AuthProvider } from './Auth';
import { RoleProvider } from './Role';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RoleProvider>{children}</RoleProvider>
  </AuthProvider>
);

export default AppProvider;
