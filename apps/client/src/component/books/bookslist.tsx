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
  console.log(data);

  return (
    <div className="container">
      <div>booklist</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        {data &&
          data.map((data: Book) => {
            return (
              <div key={data.id}>
                <Card className="row-span-1 rounded-xl">
                  <Link to={`/books/${data.id}`}>
                    <CardHeader>
                      <div className="flex items-center justify-center border rounded-lg">
                        <img
                          src={
                            data.image
                              ? "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                              : "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                          }
                          alt={data.title}
                          width={184}
                          height={184}
                        />
                      </div>
                      <CardTitle>{data.title}</CardTitle>
                    </CardHeader>
                  </Link>
                  <CardContent className="flex justify-between ">
                    <div className="text-lg space-y-1">
                      <p>{data.author}</p>
                      <p>{data.price} Point</p>
                      <div className="flex space-x-1">
                        {data.booksTags.map((tags) => {
                          return (
                            <div className="border rounded">
                              <p className="p-1 text-center text-sm">
                                {tags.tag.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <Button variant={"outline"}>Add to cart</Button>
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
