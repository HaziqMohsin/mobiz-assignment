"use client";

import React, { useState } from "react";

type Props = {};

const SearchProduct = (props: Props) => {
  const [valueSearch, setValueSearch] = useState("");

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${valueSearch}`)
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
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
  );
};

export default SearchProduct;
