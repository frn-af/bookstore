import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";

const Register = () => {
  const RegisterUser = () => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Registering user...");
    };
  };
  return (
    <div className="container flex flex-col items-center">
      <h1 className="w-full md:w-1/4 text-5xl font-black">
        Register your account
      </h1>
      <form
        className="w-full md:w-1/4 font-bold flex flex-col mt-10"
        onSubmit={RegisterUser()}
      >
        <label>Username</label>
        <Input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <Input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <Input type="password" placeholder="Enter your password..." />
        <Button className="font-bold mt-4">Login</Button>
      </form>
    </div>
  );
};

export default Register;
