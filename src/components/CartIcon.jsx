import React from "react";
import Cart from "../assets/CartSvgIcon";

export default function CartIcon({count = 0}) {
  return (
    <div className="relative flex">
      <Cart width={24} />
      <span className="w-4 h-4 bg-red-500 rounded-full text-xs text-white -translate-x-2">
        {count}
      </span>
    </div>
  );
}
