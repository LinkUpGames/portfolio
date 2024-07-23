import { createContext } from "react";

interface ChatContextProps {
  messages: Message[];
  addMessage: (message: Message, timeout: number) => void;
}

export const ChatContext = createContext<ChatContextProps>({
  messages: [],
  addMessage: () => {},
});
