import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<any>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [topicos, setTopicos] = useState<any[]>([]);

  return <AppContext.Provider value={{ topicos, setTopicos }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};

