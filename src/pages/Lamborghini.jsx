import React from 'react'
import Lambo from "../assets/cars/Lamborghini-2.jpg";
import Product from "./Product.jsx";
const Lamborghini = () => {
  const props = {
    category: "Sports Car",
    mainName: "Aventador",
    name2: "Lamborghini",
    alt: "lamborghini-sports-car",
    company: "Lamborghini",
    price: "3,000,000",
    discount: "10",
    linkName: "Lamborghini",
    id: "1"
  };
  return (
    <>
      <Product
        itemImg={Lambo}
        alt={props.alt}
        category={props.category}
        company={props.company}
        price={props.price}
        discount={props.discount}
        imgWidth="w-[500px]"
        mainName={props.mainName}
        linkName={props.linkName}
        product = {props}
      />
    </>
  );
};
export default Lamborghini;
