import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

/* eslint-disable @typescript-eslint/no-explicit-any */
const data = [
  {
    id: 1,
    title: "book1",
    author: "author1",
    image: "https://via.placeholder.com/250",
    price: 10,
  },
  {
    id: 2,
    title: "book2",
    author: "author2",
    image: "https://via.placeholder.com/250",
    price: 10,
  },
  {
    id: 3,
    title: "book3",
    author: "author3",
    image: "https://via.placeholder.com/250",
    price: 10,
  },
  {
    id: 4,
    title: "book4",
    author: "author4",
    image: "https://via.placeholder.com/250",
    price: 10,
  },
  {
    id: 5,
    title: "book5",
    author: "author5",
    image: "https://via.placeholder.com/250",
    price: 10,
  },
];

const BookList = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5001/api/books").then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  return (
    <div className="container">
      <div>booklist</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ">
        {data.map((book: any) => {
          return (
            <Card className="row-span-1 rounded-xl">
              <CardHeader>
                <img src={book.image} alt={book.title} className="rounded-lg" />
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between">
                <div className="text-lg">
                  <p>{book.author}</p>
                  <p>{book.price}</p>
                </div>
                <div className="">
                  <Button variant={"secondary"} className="rounded">
                    Add to cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* {data ? (
        data.map((book: any) => {
          return (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.description}</p>
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )} */}
    </div>
  );
};

export default BookList;
