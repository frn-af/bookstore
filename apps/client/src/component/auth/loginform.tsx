/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUserLogin } from "./api/login";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch }: any = useAuthContext();
  const { mutate, error } = useUserLogin();

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutate(data, {
        onSuccess: (data) => {
          localStorage.setItem("user", JSON.stringify(data));
          dispatch({ type: "LOGIN", payload: data });
          toast.success("login successfully, wellcome back");
          navigate("/");
        },
      });
      if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      console.log("🚀 ~ RegisterUser ~ error:", error);
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <Card className="rounded-2xl w-full md:max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account terst
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginUser}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <Button type="submit" className="w-full font-bold">
                Login
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
