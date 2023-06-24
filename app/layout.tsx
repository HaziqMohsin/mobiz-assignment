import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "./providers/sessionProvider";
import Sidebar from "@/components/Sidebar";
import { Providers } from "@/redux/provider";
import MasterPage from "@/components/MasterPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobiz Assignment",
  description: "Mobiz Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextAuthSessionProvider>
            <Sidebar />
            <MasterPage>{children}</MasterPage>
          </NextAuthSessionProvider>
        </Providers>
      </body>
    </html>
  );
}
