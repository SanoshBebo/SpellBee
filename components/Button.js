"use client";
export default function Button({
  children,
  text,
  onClick,
  containerClassName,
  textClassName,
  inverted = false,
}) {
  return (
    <button
      className={`w-full ${
        inverted ? "bg-[#5C2713]" : "bg-[#C27202]"
      }  mt-8 text-2xl rounded-xl text-white ${containerClassName}`}
      onClick={onClick}
    >
      <div
        className={`${
          inverted ? "bg-secondary" : "bg-[#FFC403]"
        } -translate-y-2 rounded-xl uppercase ${textClassName}`}
      >
        {text ? text : children}
      </div>
    </button>
  );
}
