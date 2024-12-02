import React, { useState } from "react";

export const ContextApi = React.createContext(null);

export const ContextApiProvider = function (props) {
  const [initialized, Setinitialized] = useState(false);
  return (
    <ContextApi.Provider
      value={{
        initialized,
        Setinitialized,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};
