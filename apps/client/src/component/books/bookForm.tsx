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
import { useState } from "react";
import { toast } from "sonner";
import { useAddBooks } from "./api/addBooks";

const tags = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "Mathematics",
  "History",
  "Biography",
  "Technology",
  "Programming",
];

const TagsInput = () => {
  return (
    <div>
      <Label htmlFor="tags" className="text-xl font-bold">
        Tags
      </Label>
    </div>
  );
};

const BookForm = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    price: 0,
    image: "",
    tags: [],
  });
  const { mutate, error } = useAddBooks();
  const addNewBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutate(data, {
        onSuccess: (res) => {
          if (res.error) {
            toast.error(res.error);
          }
          toast.success("Book added successfully");
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
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Book</CardTitle>
          <CardDescription>
            Enter the book details below to add a new book
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={addNewBook}>
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
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
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
                  value={data.author}
                  onChange={(e) => setData({ ...data, author: e.target.value })}
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
                  value={data.image}
                  onChange={(e) => setData({ ...data, image: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description" className="text-xl font-bold">
                    Descrition
                  </Label>
                </div>
                <Textarea
                  placeholder="Type the book description here"
                  id="description"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
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
                  required
                  value={data.price}
                  onChange={(e) => {
                    const price = parseInt(e.target.value);
                    if (isNaN(price)) {
                      e.preventDefault();
                    }
                    setData({ ...data, price: price });
                  }}
                />
              </div>
              <TagsInput />
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
