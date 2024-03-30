import "@repo/ui/globals.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Auth from "./component/auth/page/auth";
import Book from "./component/books/book";
import Navbar from "./component/navbar";
import { Toaster } from "./component/sonner";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

function App() {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = useAuthContext();
  return (
    <div className="h-screen container mx-auto my-auto bg-background">
      {location.pathname != "/login" && location.pathname != "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route
          path="/register"
          element={!user ? <Auth /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!user ? <Auth /> : <Navigate to={"/"} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
