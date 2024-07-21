import { useMemo } from "react";

interface Props {
  componentRender: JSX.Element | null;
}

const Popup = ({ componentRender }: Props) => {
  // MEMOS
  /**
   * The component we want to render
   */
  const component = useMemo<JSX.Element | null>(() => {
    return componentRender;
  }, [componentRender]);

  return (
    <div
      className={`${component ? "flex" : "hidden"} z-[9999] bg-red h-screen w-full`}
    >
      {component && component}
    </div>
  );
};

export default Popup;
