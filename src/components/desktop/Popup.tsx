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
      className={`${component ? "absolute" : "hidden"} z-[9999] h-[95%] w-full`}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="max-w-[90%] max-h-[95%] w-full h-full overflow-auto">
          {component && component}
        </div>
      </div>
    </div>
  );
};

export default Popup;
