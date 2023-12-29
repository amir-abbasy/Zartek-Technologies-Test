import React, { useState, useCallback } from "react";

export default function CounterButton({ onAdd, onRemove, initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const _onAdd = () => {
    setCount(count + 1);
    onAdd?.();
  };
  const _onRemove = () => {
    if (count == 0) return;
    setCount(count - 1);
    onRemove?.();
  };
  return (
    <div className="flex w-[140px]  bg-green-600  rounded-full justify-between items-center text-white mt-2">
      <button className="px-4 font-bold -translate-y-[1px]" onClick={_onRemove}>
        -
      </button>
      <p className="">{count}</p>
      <button className="px-4 font-bold -translate-y-[1px]" onClick={_onAdd}>
        +
      </button>
    </div>
  );
}
