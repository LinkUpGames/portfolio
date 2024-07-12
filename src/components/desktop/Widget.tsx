import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Widget = ({ children, className = "" }: Props) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Widget;
