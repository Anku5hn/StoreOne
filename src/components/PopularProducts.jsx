import React from 'react'
import {Link} from 'react-router-dom'
const PopularProducts = (props) => {
  return (
    <>
      <div className="w-full justify-center flex dark:text-white text-black mt-5">
        <div className="md:w-5/6 w-full">
          <h2 className="text-xl md:text-2xl font-bold">{props.heading}</h2>
          <div className="md:grid-cols-6 grid-cols-3 grid mt-5">
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img1src}
                alt={props.img1alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price1}
              </p>
              <p className="mx-5 text-black dark:text-white font-bold">{props.disc1}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para1}</p>
              </Link>
            </div>
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img2src}
                alt={props.img2alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price2}
              </p>
              <p className="mx-5 text-black dark:text-white  font-bold">{props.disc2}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para2}</p>
              </Link>
            </div>
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img3src}
                alt={props.img3alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price3}
              </p>
              <p className="mx-5 text-black dark:text-white  font-bold">{props.disc3}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para3}</p>
              </Link>
            </div>
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img4src}
                alt={props.img4alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price4}
              </p>
              <p className="mx-5 text-black dark:text-white  font-bold">{props.disc4}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para4}</p>
              </Link>
            </div>
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img5src}
                alt={props.img5alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price5}
              </p>
              <p className="mx-5 text-black dark:text-white  font-bold">{props.disc5}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para5}</p>
              </Link>
            </div>
            <div className="block ml-1 cursor-pointer hover:drop-shadow-lg hover:border-black rounded-sm border border-white dark:border-black dark:hover:border-red-500">
              <Link to={props.link}>
              <img
                src={props.img6src}
                alt={props.img6alt}
                className={`p-5 md:w-[500px] ${props.height} w-[250px] rounded-sm`}
              />
              <p className="mx-5 text-xl text-red-500 font-bold">
                {props.price6}
              </p>
              <p className="mx-5 text-black dark:text-white  font-bold">{props.disc6}</p>
              <p className="mx-5 text-black dark:text-white ">{props.para6}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopularProducts;
