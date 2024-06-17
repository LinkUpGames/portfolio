import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Outlet />
    </div>
  );
}

export default App;
