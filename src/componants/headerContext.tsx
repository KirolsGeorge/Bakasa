import { useState } from "react";
import { AppContext } from "./Context";

function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("ar");

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };
