import { useState } from "react";
import { AppContext } from "./Context";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  const [lang, setLang] = useState<string>("ar");

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
