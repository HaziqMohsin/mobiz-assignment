import AverageRatingProducts from "@/components/Chart/AverageRatingProducts";
import CountProductByCategory2 from "@/components/Chart/CountProductByCategory2";
import { IProduct } from "@/components/Chart/types";
import TableProduct from "@/components/TableProduct";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();

  const filterProduct = await data.products.slice(0, 5);

  const tableLimitfive: IProduct = {
    ...data,
    products: filterProduct,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AverageRatingProducts data={data.products} />
        <CountProductByCategory2 dataProduct={data.products} />
        <div className="border border-solid border-gray-300 rounded-md p-4 md:col-span-2">
          <div className="text-center font-bold text-2xl">Products</div>
          <TableProduct data={tableLimitfive} />
          <Link
            href="/product"
            className="text-blue-500 underline text-xs flex justify-end"
          >
            View more
          </Link>
        </div>
      </div>
    </main>
  );
}
