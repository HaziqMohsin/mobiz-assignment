"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import TableProduct from "./TableProduct";
import Link from "next/link";

type Props = {};

const AllProduct = (props: Props) => {
  const th = [
    "Title",
    "Description",
    "Price",
    "Discount",
    "Rating",
    "Stock",
    "Brand",
    "Category",
    "Action",
  ];

  const uiTd = "px-6 py-4";

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [valueSearch, setValueSearch] = useState("");
  const [dataSearch, setDataSearch] = useState(null);

  useEffect(() => {
    if (valueSearch === "") {
      setDataSearch(null);
    }
  }, [valueSearch]);

  const fetcher = (arg: any, ...args: any) =>
    fetch(arg, ...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip} `,
    fetcher
  );

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${valueSearch}`)
      .then(async (res) => {
        const res2 = await res.json();
        setDataSearch(res2);
      })
      .then(console.log);
  };

  const handlePrevious = () => {
    setSkip(skip - limit);
  };

  const handleNext = () => {
    setSkip(skip + limit);
  };

  return (
    <>
      <div className="flex justify-between gap-4 items-center w-full">
        <AddProductLink />
        <div className="flex gap-3 justify-center items-center">
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md w-full"
            placeholder="Search product"
            onChange={(e) => setValueSearch(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto my-4 w-full">
        {valueSearch !== "" ? (
          <TableProduct data={dataSearch} />
        ) : (
          <TableProduct data={data} />
        )}
      </div>
      {valueSearch !== "" ? (
        ""
      ) : (
        <>
          <div>
            Showing {limit + skip} of {data?.total}
          </div>
          <div className="flex gap-3 items-end my-4">
            {skip + limit > 10 ? (
              <button onClick={() => handlePrevious()}>Previous</button>
            ) : (
              ""
            )}
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </>
      )}
    </>
  );
};

export default AllProduct;

const AddProductLink = () => {
  return (
    <>
      <Link href="/product/create">
        <button className="px-4 py-2 bg-blue-500 rounded-md flex justify-end text-white">
          Add product
        </button>
      </Link>
    </>
  );
};
