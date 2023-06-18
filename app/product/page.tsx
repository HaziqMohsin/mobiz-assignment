import React from "react";
import Link from "next/link";
import TableProduct from "@/components/TableProduct";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <Link href="/product/create">
        <button className="px-4 py-2 bg-blue-500 rounded-md flex justify-end text-white">
          Add product
        </button>
      </Link>
      <TableProduct />
    </main>
  );
};

export default page;
