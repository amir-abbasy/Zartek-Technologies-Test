import React from "react";
import { useParams } from "react-router-dom";

export default function index() {
  const { ids } = useParams();
  if (!ids || ids == "{}") return <p className="text-center my-8">No Items!</p>;
  return (
    <div>
      {Object.entries(JSON.parse(ids)).map((item, key) => {
        return (
          <div className="flex border mb-4 p-2" key={key}>
            <p>dish_id : {item[0]}</p>
            <p className="ml-4">quantity : {item[1]}</p>
          </div>
        );
      })}
    </div>
  );
}
