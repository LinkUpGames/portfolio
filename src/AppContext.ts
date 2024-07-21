import { createContext } from "react";

interface AppContextProps {
  ref: HTMLDivElement | null;
  menu: number;
  setMenuItem: (index: number) => void;
  lang: MenuText;
}

export const AppContext = createContext<AppContextProps>({
  menu: 0,
  lang: {} as MenuText,
  ref: null,
  setMenuItem: () => {},
});
