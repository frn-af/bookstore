import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Link } from "react-router-dom";
import { Book, useGetBooksQuery } from "./api/getBookslist";

const BookList = () => {
  const { status, data, error } = useGetBooksQuery();
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div>booklist</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        {data &&
          data.map((book: Book) => {
            return (
              <div key={book.id}>
                <Card className="row-span-1 rounded-xl">
                  <Link to={`/books/${book.id}`}>
                    <CardHeader>
                      <div className="flex items-center justify-center border rounded-lg">
                        <img
                          src={
                            book.image
                              ? "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                              : "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                          }
                          alt={book.title}
                          width={184}
                          height={184}
                        />
                      </div>
                      <CardTitle>{book.title}</CardTitle>
                    </CardHeader>
                  </Link>
                  <CardContent className="flex justify-between">
                    <div className="text-lg">
                      <p>{book.author}</p>
                      <p>{book.price} Point</p>
                    </div>
                    <div className="">
                      <Button variant={"secondary"} className="rounded">
                        Add to cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BookList;
