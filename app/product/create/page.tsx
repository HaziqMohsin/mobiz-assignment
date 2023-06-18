"use client";
import React from "react";
import { useForm } from "react-hook-form";

type AddProductFormData = {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
};

const page = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<AddProductFormData>();

  const onSubmit = handleSubmit((data) => {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    } = data;
    console.log(data);

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        /* other product data */
      }),
    })
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <div className="text-2xl font-bold mb-4">Add Product</div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2">
          <label>Title</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Price</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="price"
            {...register("price")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Dicsount %</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="discountPercentage"
            {...register("discountPercentage")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Rating</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="rating"
            {...register("rating")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Stock</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="stock"
            {...register("stock")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Brand</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="brand"
            {...register("brand")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Category</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="category"
            {...register("category")}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
