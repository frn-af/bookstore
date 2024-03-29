import { useLocation } from "react-router-dom";
import LoginForm from "../loginform";
import RegisterForm from "../registerform";

const Auth = () => {
  const location = useLocation();
  return (
    <div className="container h-screen overflow-hidden flex items-center justify-center">
      {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Auth;
