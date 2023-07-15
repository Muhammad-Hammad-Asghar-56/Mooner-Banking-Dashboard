import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import "./index.css";
function App() {
  const [openNaveBar, setopenNaveBar] = useState(false);
  return (
    <div
      className="App h-screen w-full flex gap-4 justify-between items-center flex-col md:flex-row lg:flex-row"
      style={{ backgroundColor: "#f2f2ff" }}
    >
      <div className="background h-full w-1/6 hidden md:block lg:block">
        <Navbar />
      </div>
      <div className="h-full sm:w-full md:w-5/6 lg:w-5/6 overflow-scroll scrolling-touch">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
