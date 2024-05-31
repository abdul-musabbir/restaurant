"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

function NotFound() {
  return (
    <div>
      <MainHeader />
      <Header />

      <div className="w-full flex items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={"/error.png"}
              width={100}
              height={100}
              alt="logo"
              className={"w-40"}
            />
          </div>

          <div className="mt-8">
            <Link
              href={"/"}
              className={
                "bg-black text-white py-3 font-bold px-6 text-xl rounded-md"
              }
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
