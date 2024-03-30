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
import { Textarea } from "@repo/ui/components/ui/textarea";

const BookForm = () => {
  return (
    <>
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Book</CardTitle>
          <CardDescription>
            Enter the book details below to add a new book
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-xl font-bold">
                  Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter the title of the book"
                  required
                  //   value={""}
                  //   onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="author" className="text-xl font-bold">
                    Author
                  </Label>
                </div>
                <Input
                  id="author"
                  type="text"
                  placeholder="Enter the author of the book"
                  required
                  //   value={""}
                  //   onChange={(e) =>
                  //     setData({ ...data, password: e.target.value })
                  //   }
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="image" className="text-xl font-bold">
                    Image <span className="text-sm">(URL)</span>
                  </Label>
                </div>
                <Input
                  id="image"
                  type="url"
                  placeholder="Enter the image URL of the book"
                  required
                  //   value={""}
                  //   onChange={(e) =>
                  //     setData({ ...data, password: e.target.value })
                  //   }
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description" className="text-xl font-bold">
                    Descrition
                  </Label>
                </div>
                <Textarea placeholder="Type the book description here" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="price" className="text-xl font-bold">
                    Price
                  </Label>
                </div>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter the price of the book"
                  pattern="[0-9]*"
                  required
                  //   value={""}
                  //   onChange={(e) =>
                  //     setData({ ...data, password: e.target.value })
                  //   }
                />
              </div>

              <Button type="submit" className="w-full font-bold">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default BookForm;
