import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20">
        <div className="container p-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Bookstore</h1>
          <div className="space-x-4">
            <Link to={"/login"}>
              <Button variant={"secondary"} className="w-32 text-xl">
                Login
              </Button>
            </Link>
            <span className="text-xl">Or</span>
            <Link to={"/register"}>
              <Button variant={"secondary"} className="w-32 text-xl">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
