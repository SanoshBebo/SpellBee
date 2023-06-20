import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lilita_One, Poppins } from "next/font/google";

const Lilita = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Lilita_One",
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${Lilita.variable} h-screen overflow-hidden`}
      >
        {/* <Navbar /> */}
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
