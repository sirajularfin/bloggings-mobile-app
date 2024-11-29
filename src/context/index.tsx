import React, { createContext, useReducer, ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export default (reducer: any, actions: any, initialState: any) => {
  const Context = createContext<undefined>(undefined);

  const Provider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state, dispatch, actions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
