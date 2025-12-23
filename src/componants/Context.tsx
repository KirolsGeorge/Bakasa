import { createContext } from "react";

type langStetType = {
  lang: string;
  setLang: (lang: string) => void;
};

const defaultState: langStetType = {
  lang: "ar",
  setLang: () => {},
};

export const AppContext = createContext<langStetType>(defaultState);
