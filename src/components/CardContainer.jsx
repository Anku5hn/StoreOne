import React from 'react'
import Car from '../assets/car.png'
import Agent from '../assets/agent.png'
const CardContainer = () => {
  return (
    <>
      <div className="w-full md:flex hidden justify-center items-center mt-5">
        <div className="w-5/6 flex justify-between">
          <div className="w-[calc(50%-10px)] dark:bg-gray-900 bg-[rgba(238,246,252,100)] rounded-sm flex cursor-pointer" >
                <img alt="three-cars" className="w-[90px] h-[90px] m-2" src={Car}/>
                <div className="block m-2">
                    <h2 className="dark:text-white text-black text-xl">Introducing New Cars</h2>
                    <p className="dark:text-white text-black text-md">Buy the best luxary and sports cars</p>
                    <p className="dark:text-white text-black p-2 dark:bg-gray-800 bg-white rounded-md text-center">Buy Now →</p>
                </div>
          </div>
          <div className="w-[calc(50%-10px)] dark:bg-gray-900 bg-[rgba(238,246,252,100)] rounded-sm flex justify-between cursor-pointer">
                <div className="block m-2">
                    <h2 className="dark:text-white text-black text-xl">Discover Best Agents! <span className="rounded-l-full rounded-r-full bg-red-500 text-white px-1 py-[1px] text-xs font-bold ">New</span></h2> 
                    <p className="dark:text-white text-black text-md">Connect with our partners to find anything.</p>
                    <p className="dark:text-white text-black p-2 dark:bg-gray-800 bg-white rounded-md text-center">Connect Now →</p>
                </div>
                <img alt="agents" className="w-[90px] h-[90px] m-2" src={Agent}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardContainer;
