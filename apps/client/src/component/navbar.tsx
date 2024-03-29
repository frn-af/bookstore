/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Separator } from "@repo/ui/components/ui/separator";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user }: any = useAuthContext();
  const data = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <>
      <div className="w-full h-20">
        <div className="container p-4 flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-4xl font-bold">Bookstore</h1>
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className="text-lg p-4">
                  {data.user.username}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="flex flex-col space-y-2">
                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
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
          )}
        </div>
        <Separator />
      </div>
    </>
  );
};

export default Navbar;
