import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      {" "}
      <div className="bg-black h-56 p-2 relative">
        {" "}
        <div className=" relative">
          <div class=" bg-green-500 flex  h-52  justify-center gap-2   border-4">
            <div className="h-24 w-24 bg-black  absolute top-40   ">1</div>
            <div className="h-24 w-24 bg-red-500 top-5">2</div>
            <div className="h-24 w-24 bg-lime-300">3</div>
            <div className="h-24 w-24 bg-fuchsia-400">4</div>
          </div>
        </div>
      </div>
    </>
  );
}
