import "@repo/ui/globals.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <div className="h-screen container mx-auto p-4 flex items-center justify-center bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
