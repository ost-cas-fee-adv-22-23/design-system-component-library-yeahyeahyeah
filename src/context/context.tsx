import { useState, createContext } from 'react';

export interface ContextProps {
  user: User | undefined;
  setUser: (user: User) => void;
}

export interface User {
  name: string;
  surname: string;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as ContextProps);

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>();
  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
