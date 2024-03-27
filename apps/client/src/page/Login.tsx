import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";

const Login = () => {
  const loginUser = () => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Logging in user...");
    };
  };
  return (
    <div className="container flex flex-col items-center">
      <h1 className="w-1/4 text-5xl font-black">Login to your account</h1>
      <form
        className="w-1/4 font-bold flex flex-col mt-10"
        onSubmit={loginUser()}
      >
        <label>Email</label>
        <Input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <Input type="password" placeholder="Enter your password..." />
        <Button className="font-bold mt-4">Login</Button>
      </form>
    </div>
  );
};

export default Login;
