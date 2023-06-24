import AverageRatingProducts from "@/components/Chart/AverageRatingProducts";
import CountProductByCategory2 from "@/components/Chart/CountProductByCategory2";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <AverageRatingProducts data={data.products} />
      <CountProductByCategory2 dataProduct={data.products} />
    </main>
  );
}
