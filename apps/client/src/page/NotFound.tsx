import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex h-1/6 items-center justify-center space-x-10">
        <h1 className="font-black text-7xl">404</h1>
        <Separator orientation="vertical" />
        <div>
          <h4 className="text-5xl mb-4">Page not found</h4>
          <Separator />
          <h2 className="text-2xl mb-4">
            Sorry, we couldn't find the page you looking for
          </h2>
          <Button variant={"secondary"} className="w-full text-xl">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
