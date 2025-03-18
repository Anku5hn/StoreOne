import React from "react";
import {useCart} from "../ContextAPI/CartContext.jsx";
const Cart = (props) => {
  const { items } = useCart();
  return (
    <>
      <div className={`w-[300px] h-auto absolute bg-white rounded-md shadow-md hidden md:block ${props.alert == 'hidden'? 'top-[50px]':'top-[110px]'} right-[200px] p-2 z-10`}>
        {items.map((item) => (
          <div className="grid-cols-3 grid">
            <p className="font-bold">{item.company}</p>
            <p>{item.mainName}</p>
            <p className="text-red-500">AED {item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cart;
