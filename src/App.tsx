import { Outlet } from "react-router-dom";
import "./App.css";
import WindowBorder from "./components/desktop/WindowBorder";

function App() {
  return (
    <div className="w-full p-3 min-h-screen bg-black flex flex-col gap-2">
      {/* Navbar */}
      <WindowBorder />

      <Outlet />
    </div>
  );
}

export default App;
