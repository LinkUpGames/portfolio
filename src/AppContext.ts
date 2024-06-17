import { createContext } from "react";

interface AppContextProps {
  menu: number;
}

export const AppContext = createContext<AppContextProps>({
  menu: 0,
});
