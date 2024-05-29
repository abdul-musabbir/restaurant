import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...value) {
  return twMerge(clsx(value));
}
