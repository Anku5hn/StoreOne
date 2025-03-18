import React from 'react'
import Product from "./Product.jsx";
import iPhoneX from '../assets/phones/iphonex.png'
const Lamborghini = () => {
  const props = {
    category: "Phones",
    mainName: "iPhone X",
    alt: "Apple-iPhone",
    company: "Apple",
    price: "1000",
    discount: "12",
    linkName: "iPhone X",
    id:"0",
  };
  return (
    <>
      <Product
        itemImg={iPhoneX}
        alt={props.alt}
        category={props.category}
        company={props.company}
        price={props.price}
        discount={props.discount}
        imgWidth="w-[200px]"
        mainName={props.mainName}
        linkName={props.linkName}
        product = {props}
      />
    </>
  );
};
export default Lamborghini;
