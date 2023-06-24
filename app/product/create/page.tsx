"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useRouter } from "next/navigation";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
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
      }),
    })
      .then((res) => {
        toast.success("Successfully added", {
          autoClose: 5000,
        });
        console.log(res);
        reset();
        setTimeout(() => {
          router.push("/product");
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24 md:p-24 ">
      <div className="text-2xl font-bold mb-4">Add Product</div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2">
          <label>Title</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="text-red-500 text-xs">Title is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <div className="text-red-500 text-xs">Description is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Price</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <div className="text-red-500 text-xs">Price is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Discount %</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="discount"
            {...register("discountPercentage", { required: true })}
          />
          {errors.discountPercentage && (
            <div className="text-red-500 text-xs">Discount is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Rating</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="rating"
            {...register("rating", { required: true })}
          />
          {errors.rating && (
            <div className="text-red-500 text-xs">Rating is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Stock</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="stock"
            {...register("stock", { required: true })}
          />
          {errors.stock && (
            <div className="text-red-500 text-xs">Stock is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Brand</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="brand"
            {...register("brand", { required: true })}
          />
          {errors.brand && (
            <div className="text-red-500 text-xs">Brand is Required</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Category</label>
          <input
            className="px-4 py-2 border border-solid border-gray-400 rounded-md"
            type="text"
            placeholder="category"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <div className="text-red-500 text-xs">Category is Required</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </main>
  );
};

export default page;
