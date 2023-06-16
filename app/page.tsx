import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>this is protected page</div>
    </main>
  );
}
