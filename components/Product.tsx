"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import TableProduct from "./TableProduct";
import Link from "next/link";
import CountProductByCategory2 from "./Chart/CountProductByCategory2";
import { IProduct } from "./Chart/types";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getListCategories } from "@/redux/features/globalSlice";

type Props = {};

const AllProduct = (props: Props) => {
  const dispatch = useAppDispatch();

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [valueSearch, setValueSearch] = useState("");
  const [dataSearch, setDataSearch] = useState<IProduct>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dataByCategory, setDataByCategory] = useState<IProduct | undefined>();

  useEffect(() => {
    if (valueSearch === "") {
      setDataSearch(undefined);
    }
  }, [valueSearch]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(async (res) => {
        const categories = await res.json();
        dispatch(getListCategories(categories));
        // console.log(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then(async (res) => {
        const byCategory = await res.json();
        setDataByCategory(byCategory);
        console.log(byCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategory]);

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
        setSelectedCategory("");
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

  const listCategory = useAppSelector(
    (state) => state.globalReducer.categoryList
  );

  const handleSelectedCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 items-center w-full">
        <AddProductLink />
        <div className="flex justify-between gap-3 w-full">
          <div className="flex items-center gap-2">
            <div className="flex-none text-sm text-gray-600">
              Filter by categories
            </div>
            <select
              onChange={handleSelectedCategory}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option defaultValue={""} value={""}>
                All Categories
              </option>
              {listCategory.map((v, i) => {
                return (
                  <option key={i} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>
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
      </div>
      <div className="relative overflow-x-auto my-4 w-full">
        {valueSearch !== "" ? (
          <>
            {dataSearch?.products && (
              <>
                <TableProduct data={dataSearch} />
                <div className="h-[300]">
                  <CountProductByCategory2 dataProduct={dataSearch?.products} />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {selectedCategory !== "" ? (
              <TableProduct data={dataByCategory} />
            ) : (
              <>
                <TableProduct data={data} />
                <div className="flex flex-col items-center w-full">
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
                </div>
              </>
            )}
          </>
        )}
      </div>
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
