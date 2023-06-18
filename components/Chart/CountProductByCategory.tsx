"use client";
import React from "react";
import { Product } from "./types";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  HorizontalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  FlexibleXYPlot,
  FlexibleWidthXYPlot,
} from "react-vis";

type Props = {
  data: Product[];
};

type FilterItem = {
  x: string;
  y: number;
};

const CountProductByCategory = ({ data }: Props) => {
  console.log(data);

  const countByCategory = data.reduce((acc, product) => {
    const { category } = product;
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {});

  const result = Object.keys(countByCategory).map((category, i) => ({
    y: category,
    x: countByCategory[category],
  }));

  console.log(result);

  const data2 = [
    {
      y: "samsung",
      x: 5,
    },
    {
      y: "apple",
      x: 5,
    },
  ];

  return (
    <FlexibleWidthXYPlot yType="ordinal" height={500} yDistance={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <HorizontalBarSeries
        // className="vertical-bar-series-example"
        data={result}
      />
      {/* <BarSeries data={blueData} />
          <LabelSeries data={labelData} getLabel={d => d.x} /> */}
    </FlexibleWidthXYPlot>
  );
};

export default CountProductByCategory;
