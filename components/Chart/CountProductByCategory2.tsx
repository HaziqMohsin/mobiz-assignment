"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Product } from "./types";

type Props = {
  dataProduct: Product[] | undefined;
};

const CountProductByCategory2 = ({ dataProduct }: Props) => {
  //   console.log(dataProduct);

  const labelProduct = dataProduct?.reduce((label: any, product) => {
    const { category } = product;

    if (label[category]) {
      label[category]++;
    } else {
      label[category] = 1;
    }
    return label;
  }, {});

  //   console.log(labelProduct);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Count product by category",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: Object?.keys(labelProduct),
    datasets: [
      {
        label: "Dataset 1",
        data: Object?.values(labelProduct),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="border border-solid border-gray-300 rounded-md p-4">
      <Bar options={options} data={data} height={300} width={300} />
    </div>
  );
};

export default CountProductByCategory2;
