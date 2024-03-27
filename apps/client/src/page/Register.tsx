import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5001/api/register", {
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ username: "", email: "", password: "" });
        toast.success("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("🚀 ~ RegisterUser ~ error:", error);
      toast.error("Internal Server Error");
    }
  };
  return (
    <div className="container flex flex-col items-center">
      <h1 className="w-full md:w-1/4 text-5xl font-black">
        Register your account
      </h1>
      <form
        className="w-full md:w-1/4 font-bold flex flex-col mt-10"
        onSubmit={RegisterUser}
      >
        <label>Username</label>
        <Input
          type="text"
          placeholder="Enter your username..."
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
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

export default Register;
