"use client";

import React, { useState } from "react";
import { IProduct } from "./Chart/types";

type Props = {
  data: IProduct | null;
};

const TableProduct = ({ data }: Props) => {
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

  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <div className="relative overflow-x-auto my-4 w-full">
        <table className="overflow-x-auto w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {th.map((v, i) => {
                return (
                  <th scope="col" className="px-6 py-3" key={i}>
                    {v}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.products?.map((v: any, i: number) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  <td className={uiTd}>{v.title}</td>
                  <td className={`${uiTd}`}>
                    <p className="line-clamp-2">{v.description}</p>
                  </td>
                  <td className={uiTd}>{v.price}</td>
                  <td className={uiTd}>{v.discountPercentage}</td>
                  <td className={uiTd}>{v.rating}</td>
                  <td className={uiTd}>{v.stock}</td>
                  <td className={uiTd}>{v.brand}</td>
                  <td className={uiTd}>{v.category}</td>
                  <td className={uiTd}>
                    <button
                      className="px-2 dark:text-white bg-red-600 rounded-md"
                      onClick={() => handleDelete(v.id)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProduct;
