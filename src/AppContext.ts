import { createContext } from "react";

/**
 * Global values and functions available throughout the
 * whole app
 */
interface AppContextProps {
  /**
   * The root div
   */
  ref: HTMLDivElement | null;

  /**
   * What menu page is currently displayed
   *
   * For example: 0 would be the "home" page
   */
  menu: number;

  /**
   * Update the page that is displayed
   *
   * @param index The page id
   */
  setMenuItem: (index: number) => void;

  /**
   * Localization text
   *
   * The text to display will change depending on the language
   */
  lang: MenuText;

  /**
   * Update the window that is opened when a footer app is launched
   */
  changePopup: (component: JSX.Element | null) => void;
}

export const AppContext = createContext<AppContextProps>({
  menu: 0,
  lang: {} as MenuText,
  ref: null,
  setMenuItem: () => {},
  changePopup: () => {},
});
