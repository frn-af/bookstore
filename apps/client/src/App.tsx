import "@repo/ui/globals.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "./component/sonner";
import { UserProvider } from "./context/authContext";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = useAuthContext();
  return (
    <div className="h-screen container mx-auto p-4 bg-background">
      <UserProvider>
        <Routes>
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster />
      </UserProvider>
    </div>
  );
}

export default App;
