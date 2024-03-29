import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useGetBooksDetailQuery } from "./api/getBooksDetail";

const Book = () => {
  const productId = useParams().id as string;
  const { data, status, error } = useGetBooksDetailQuery(productId);
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    toast.error(error.message);
    return <div>{error.message}</div>;
  }
  console.log(data);
  return (
    <div className="h-full w-full flex items-center">
      {data && (
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2 h-[90vh] border rounded-s-xl flex items-center justify-center">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
              alt="test"
              className="aspect-w-1 aspect-h-1 w-3/5 object-cover"
            />
          </div>
          <div className="w-full h-[90vh] flex flex-col ">
            <div className="border rounded-tr-xl p-4">
              <div className="flex">
                <div className="grow">
                  <h1 className="text-5xl underline">{data.id}</h1>
                  <h4 className="text-xl"> Author: {data.author}</h4>
                  <h1 className="text-4xl">{data.price} Point</h1>
                </div>
                <div>
                  <button className="border p-4">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="border rounded-br-xl grow p-4 space-y-1">
              <h4 className="underline text-xl">tags:</h4>
              <div className="flex space-x-1">
                {data.booksTags.map((tags) => (
                  <div className="border rounded">
                    <p className="p-1 text-sm">{tags.tag.name}</p>
                  </div>
                ))}
              </div>
              <h4 className="underline text-xl">Description:</h4>
              <p className="text-xl">{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
