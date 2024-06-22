import { createContext } from "react";

interface AppContextProps {
  menu: number;
  lang: MenuText;
}

export const AppContext = createContext<AppContextProps>({
  menu: 0,
  lang: {} as MenuText,
});
