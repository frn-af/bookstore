import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { dispatch }: any = useAuthContext();
  const navigate = useNavigate();
  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5001/api/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" });

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "LOGIN", payload: data });

        toast.success("login successfully, wellcome back");
        navigate("/");
      }
    } catch (error) {
      console.log("🚀 ~ RegisterUser ~ error:", error);
      toast.error("Internal Server Error");
    }
  };
  return (
    <div className="container flex flex-col items-center">
      <h1 className="w-1/4 text-5xl font-black">Login to your account</h1>
      <form
        className="w-1/4 font-bold flex flex-col mt-10"
        onSubmit={loginUser}
      >
        <label>Email</label>
        <Input
          type="email"
          placeholder="Enter your email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="Enter your password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button className="font-bold mt-4">Login</Button>
      </form>
    </div>
  );
};

export default Login;
