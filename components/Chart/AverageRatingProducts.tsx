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
    <div className="">
      <div className="text-center">
        Average rating of all products:{" "}
        <span className="font-bold text-lg">{averageRating}</span>
      </div>
    </div>
  );
};

export default AverageRatingProducts;
