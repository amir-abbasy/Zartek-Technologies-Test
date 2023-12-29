import React from "react";

export default function VegNonvegIcon({ isVeg, className }) {
  return (
    <div
      className={`w-5 h-5 mx-2 border-2 p-[1px] flex justify-center items-center ${
        isVeg ? "border-green-600" : "border-red-600"
      } ${className}`}
    >
      <div
        className={`w-3 h-3 rounded-full ${
          isVeg ? "bg-green-600" : "bg-red-600"
        }`}
      />
    </div>
  );

  VegNonvegIcon.defaultProps = {
    isVeg: true,
  };
}
