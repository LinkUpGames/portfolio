import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Widget = ({ children }: Props) => {
  return <div className="w-6 h-6">{children}</div>;
};

export default Widget;
