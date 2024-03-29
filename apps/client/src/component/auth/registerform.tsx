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
import { useUserRegister } from "./api/register";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { dispatch }: any = useAuthContext();
  const navigate = useNavigate();
  const { mutate, error } = useUserRegister();

  const RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutate(data, {
        onSuccess: (data) => {
          if (data.error) return toast.error(data.error);
          localStorage.setItem("user", JSON.stringify(data));
          dispatch({ type: "LOGIN", payload: data });
          toast.success("login Successfully");
          navigate("/");
        },
      });
      if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };
  return (
    <>
      <Card className="rounded-2xl w-full md:max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Fill the field below to create account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={RegisterUser}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="Username"
                  type="text"
                  placeholder="Username"
                  required
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
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
                Sign Up
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterForm;
