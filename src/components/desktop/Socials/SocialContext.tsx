import { createContext } from "react";

/**
 * API available in the Social Widget
 */
interface Context {
  /**
   * Close the widget completely
   */
  closeWidget: () => void;
}

export const SocialContext = createContext<Context>({
  closeWidget: () => {},
});
