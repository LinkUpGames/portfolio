import { Outlet } from "react-router-dom";
import "./App.css";
import WindowBorder from "./components/desktop/WindowBorder";
import { AppContext } from "./AppContext";
import { useState } from "react";

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
        <WindowBorder />

        <div className="px-4 py-2 bg-white h-full rounded-b-md">
          <Outlet />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
