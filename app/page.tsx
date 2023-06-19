import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AverageRatingProducts from "@/components/Chart/AverageRatingProducts";
// import CountProductByCategory from "@/components/Chart/CountProductByCategory";

export default async function Home() {
  //   const session = await getServerSession(authOptions);

  //   if (!session) {
  //     redirect("/api/auth/signin");
  //   }

  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <div>this is protected page</div> */}
      <AverageRatingProducts data={data.products} />
      {/* <CountProductByCategory data={data.products} /> */}
    </main>
  );
}
