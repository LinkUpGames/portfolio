import { AppContext } from "@/AppContext";
import { useContext, useEffect, useMemo, useState } from "react";

const Popup = () => {
  // APP CONTEXT
  const {} = useContext(AppContext);

  // MEMOS
  /**
   * The component we want to render
   */
  const component = useMemo<JSX.Element | null>(() => {
    return null;
  }, []);

  return (
    <div
      className={`${component ? "flex" : "hidden"} z-[9999] bg-red h-screen w-full`}
    >
      hello
    </div>
  );
};

export default Popup;
