import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import BookForm from "../component/books/bookForm";
import BookList from "../component/books/bookslist";

const home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between my-4 items-center">
        <h3 className="text-2xl font-semibold">Collection</h3>
        <Sheet>
          <SheetTrigger>
            <Button variant={"secondary"} className="text-lg font-medium">
              Add New Book
            </Button>
          </SheetTrigger>
          <SheetContent
            className="max-w-7xl mx-auto rounded-xl border"
            side={"bottom"}
          >
            <div className="p-4">
              <BookForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Separator className="mb-4" />
      <BookList />
    </div>
  );
};
export default home;
