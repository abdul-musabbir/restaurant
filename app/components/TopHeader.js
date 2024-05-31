import { Clock, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className=" bg-reds w-full py-4">
      <div className="flex mx-auto w-11/12">
        <div className="w-full flex justify-between items-center text-white">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <div className="flex gap-2">
              <Clock />
              <span>7.30 AM - 9.30 PM</span>
            </div>

            <div className="flex gap-2">
              <PhoneCall />
              <span>+880 12345 6789</span>
            </div>
          </div>

          <div>
            <Link href={"/register"}>
              <span className="uppercase font-bold">register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
