"use client";

import React from "react";
import { Product } from "./types";

type Props = {
  data: Product[];
};

const AverageRatingProducts = ({ data }: Props) => {
  const totalRating = data.reduce((sum, product) => sum + product.rating, 0);
  const averageRating = totalRating / data.length;

  return (
    <div className="border border-solid border-gray-300 rounded-md p-4">
      <div className="text-center flex flex-col">
        <div>Average rating of all products: </div>
        <div className="font-bold text-lg">{averageRating}</div>
      </div>
    </div>
  );
};

export default AverageRatingProducts;
