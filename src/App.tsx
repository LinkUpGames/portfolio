import { Outlet } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AppContext";
import { useMemo, useRef, useState } from "react";

import StatusBar from "./components/desktop/StatusBar";
import Launcher from "./components/desktop/Launcher/Launcher";

import en from "@/text/en.json";
import Popup from "./components/desktop/Popup";
import MatrixCode from "./helpers/MatrixCode";

function App() {
  // REF
  const ref = useRef<HTMLDivElement>(null);

  // STATES
  const [menu, setMenu] = useState<number>(0);
  const [popup, setPopup] = useState<JSX.Element | null>(null); // The popup (e.g. Chat, Music Player)

  // MEMOS
  /*
   * The language to display the text in the website
   */
  const lang: MenuText = useMemo(() => {
    let data: MenuText = en;

    return data!;
  }, []);

  // FUNCTION
  /**
   * Handle the popup that we want to display For extended purposes
   * @param component The component that we wish to display
   */
  const handlePopup = (component: JSX.Element | null) => {
    setPopup(component);
  };

  return (
    <AppContext.Provider
      value={{
        ref: ref.current,
        menu: menu,
        lang: lang,
        setMenuItem: setMenu,
        changePopup: handlePopup,
      }}
    >
      <div className="w-full p-3 h-screen max-h-screen bg-black flex flex-col md:overflow-hidden">
        {/* Navbar */}
        <StatusBar />

        <div
          className="px-4 py-2 w-full relative h-full rounded-b-md flex flex-col justify-start gap-5 items-center overflow-y-auto md:overflow-hidden"
          ref={ref}
        >
          <MatrixCode />

          <Outlet />

          <Popup componentRender={popup} />

          {/* Footer */}
          <Launcher />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
