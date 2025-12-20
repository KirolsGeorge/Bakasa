import { createContext } from "react";

type AppState = {
  lang: string;
  setLang: (lang: string) => void;
};

const defaultState: AppState = {
  lang: "ar",
  setLang: () => {},
};

export const AppContext = createContext<AppState>(defaultState);