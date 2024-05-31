import Image from "next/image";
import { DropDownMenu } from "../client/AllClientComponents";
import cn from "../lib/cn";
export default function Header({ className }) {
  return (
    <div
      className={cn(
        "flex items-center h-20 md:h-24 bg-[#fff8ee] border-b shadow-xl sticky top-0 left-0 right-0 z-50",
        className
      )}
    >
      <div className="mx-auto flex w-11/12 items-center">
        <div className="flex w-full justify-between items-center">
          <div>
            <Image
              src={"/logo.png"}
              className="md:w-20"
              width={80}
              height={80}
              alt="logo"
            />
          </div>

          <DropDownMenu />
        </div>
      </div>
    </div>
  );
}
