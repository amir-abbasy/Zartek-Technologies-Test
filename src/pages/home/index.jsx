import "../../../index.css";
import axios, { isCancel, AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import {
  CounterButton,
  VegNonvegIcon,
  CartIcon,
  Loader,
} from "../../components";
import { useNavigate } from "react-router-dom";

export default function index() {
  const [state, setState] = useState({
    data: null,
    activeTab: 0,
    cartCount: 0,
    cart: {},
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb")
      .then((res) => res)
      .then(({ data }) => {
        setState((prev) => ({ ...prev, data: data.data[0] }));
      })
      .catch((error) => console.log(error));
  }, []);

  {
    /* L O A D E R */
  }
  if (!state.data)
    return (
      <div className="text-center font-bold text-2xl mt-20 flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <main>
      {/* H E A D E R */}
      <header className="flex justify-between p-6">
        <h1 className="text-2xl text-gray-600">
          {state.data?.restaurant_name}
        </h1>
        <button
          className="flex"
          onClick={() => navigate(`/cart/${JSON.stringify(state.cart)}`)}
        >
          <p> My Orders </p>
          <CartIcon count={state.cartCount} />
        </button>
      </header>
      {/* C A T E G O R I E S */}
      <div className="flex  overflow-x-scroll mt-4">
        {state.data.table_menu_list.map((item, index) => {
          return (
            <div
              key={"menu_category_" + item.menu_category_id}
              className="cursor-pointer border-b-2 "
              onClick={() =>
                setState((prev) => ({ ...prev, activeTab: index }))
              }
            >
              <p
                className={`${
                  index == state.activeTab
                    ? "text-red-400 border-red-500"
                    : "text-black"
                } w-[200px] border-b-2 text-center font-bold`}
              >
                {item.menu_category}
              </p>
            </div>
          );
        })}
      </div>
      {/* M E N U  L I S T */}
      <section>
        {state.data.table_menu_list[state.activeTab]["category_dishes"].map(
          (item, key) => {
            return (
              <div
                key={"category_dishes" + item.dish_id}
                className="p-2 flex justify-between items-center border-b"
              >
                <VegNonvegIcon
                  isVeg={item["dish_Type"] == 2}
                  className="self-start mt-2"
                />
                <div className="flex-1">
                  <h1 className="font-bold text-2xl"> {item["dish_name"]}</h1>
                  <p className="font-bold">
                    <span>{item["dish_currency"]} </span>
                    <span>{item["dish_price"]}</span>
                  </p>
                  <p className="text-gray-400">{item["dish_description"]}</p>
                  {item["dish_Availability"] ? (
                    <CounterButton
                      onAdd={() =>
                        setState((prev) => ({
                          ...prev,
                          cartCount: state.cartCount + 1,
                          cart: {
                            ...state.cart,
                            [item["dish_id"]]: state.cartCount + 1,
                          },
                        }))
                      }
                      onRemove={() =>
                        setState((prev) => ({
                          ...prev,
                          cartCount: state.cartCount - 1,
                          cart: {
                            ...state.cart,
                            [item["dish_id"]]: state.cartCount - 1,
                          },
                        }))
                      }
                      initialCount={state.cart[item["dish_id"]] ?? 0}
                    />
                  ) : (
                    <p className="text-red-500">Not available</p>
                  )}
                  {item["addonCat"].length > 0 && (
                    <p className="text-red-500">Customizations available</p>
                  )}
                </div>
                <div className="md:flex items-center">
                  <p className="mr-4 md:mr-20 text-sm font-bold">
                    {item["dish_calories"]} calories
                  </p>
                  <img
                    src={item["dish_image"]}
                    className="w-16 h-16 md:w-24 md:h-20 rounded-md"
                  />
                </div>
              </div>
            );
          }
        )}
      </section>
    </main>
  );
}
