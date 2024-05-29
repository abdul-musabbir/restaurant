import cn from "../lib/cn";

function Button({ name, className, Icons, RightIcons, size, iclass }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-red-700 text-white font-bold rounded-xl",
        className
      )}
    >
      {name || "Button"}{" "}
      {Icons && (
        <span className=" absolute right-3">
          {" "}
          <Icons />
        </span>
      )}
      {""}
      {RightIcons && <RightIcons size={size} className={cn(iclass)} />}
    </button>
  );
}

export default Button;
