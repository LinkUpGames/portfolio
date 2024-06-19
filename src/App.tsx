import { Outlet } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AppContext";
import { useState } from "react";

import StatusBar from "./components/desktop/StatusBar";

import bg from "@/assets/bg.svg";

function App() {
  // STATES
  const [menu, setMenu] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        menu: menu,
      }}
    >
      <div className="w-full p-3 h-screen max-h-screen bg-black flex flex-col md:overflow-hidden">
        {/* Navbar */}
        <StatusBar />

        <div
          className="px-4 py-2 bg-write w-full relative h-full rounded-b-md flex flex-col justify-start gap-5 items-center md:block overflow-y-auto md:overflow-y-hidden"
          style={{
            backgroundImage: `url(${bg}`,
          }}
        >
          <Outlet />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
