import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import AuthProvider from "./components/AuthProvider";

export const metadata: Metadata = {
  title: "Green Haven",
  description: "Sustainable home designs ready at your fingertips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
