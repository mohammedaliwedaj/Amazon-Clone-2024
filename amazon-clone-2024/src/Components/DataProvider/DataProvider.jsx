import React, { Children, createContext, useReducer } from "react";

export const DataContext = createContext();
export const DataProvider = ({ Children, reducer, initialState }) => {
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {Children}
  </DataContext.Provider>;
};
