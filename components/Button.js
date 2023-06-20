"use client";
import Image from "next/image";
export default function Button({
  children,
  text,
  onClick,
  containerClassName,
  textClassName,
  image,
  inverted = false,
}) {
  return (
    <button
      className={`${
        inverted ? "bg-[#5C2713]" : "bg-[#C27202]"
      }  text-2xl rounded-xl text-white ${containerClassName}`}
      onClick={onClick}
    >
      <div
        className={`${
          inverted ? "bg-secondary" : "bg-[#FFC403]"
        } -translate-y-3 rounded-xl uppercase ${textClassName}`}
      >
        {text ? text : children}
      </div>
    </button>
  );
}
