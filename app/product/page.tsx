import React from "react";
import Product from "@/components/Product";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-24 md:p-24 overflow-hidden ">
      <Product />
    </main>
  );
};

export default page;
