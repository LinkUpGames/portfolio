import { Outlet } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AppContext";
import { useState } from "react";

import StatusBar from "./components/desktop/StatusBar";

import bg from "@/assets/bg.svg";

function App() {
  // STATES
  const [menu, setMenu] = useState(0);

  return (
    <AppContext.Provider
      value={{
        menu: menu,
      }}
    >
      <div className="w-full p-3 h-screen bg-black flex flex-col">
        {/* Navbar */}
        <StatusBar />

        <div
          className="px-4 py-2 bg-write w-full relative h-full rounded-b-md"
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
