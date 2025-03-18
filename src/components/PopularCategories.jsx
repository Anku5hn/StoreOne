import React from 'react'
import {
  CarOutlined,
  DashboardOutlined,
  MobileOutlined,
  TabletOutlined,
  DiscordOutlined,
  MenuOutlined ,
} from "@ant-design/icons";
const PopularCategories = () => {
  return (
    <>
      <div className="mt-1 dark:text-white text-black w-full md:flex md:justify-center md:mt-5">
        <div className="md:w-5/6 md:mt-5">
          <h1 className=" font-bold text-xl">Popular Categories</h1>
          <div className="grid-cols-3 grid mt-5" id="grid-1-container">
            <p className="font-bold text-sm">
              <CarOutlined style={{ color: "#FF4D4F" }} /> Cars
            </p>
            <p className="font-bold text-sm">
              <DashboardOutlined style={{ color: "#FF4D4F" }} /> Bikes
            </p>
            <p className="font-bold text-sm">
              <MobileOutlined style={{ color: "#FF4D4F" }} />
              Phones
            </p>
            <div id="cars-container">
              <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Sedan</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Hatchback</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">SUV</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Luxary</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Sport</span>
                </li>
              </ul>
            </div>
            <div id="bikes-container">
              <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Sport</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Moped</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">E-bike</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">E-scooter</span>
                </li>
              </ul>
            </div>
            <div id="phone-container">
              <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Apple</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Samsung</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Xiaomi</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Oppo</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">OnePlus</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-cols-3 grid" id="grid-2-container">
            <p className="font-bold text-sm">
              <TabletOutlined style={{ color: "#FF4D4F" }} /> Tablets
            </p>
            <p className="font-bold text-sm">
              <DiscordOutlined style={{ color: "#FF4D4F" }} /> Community
            </p>
            <p className="font-bold text-sm">
              <MenuOutlined  style={{ color: "#FF4D4F" }} /> Others
            </p>
            <div id="Tablets-container">
          <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Apple</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Samsung</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Xiaomi</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Oppo</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">OnePlus</span>
                </li>
              </ul>
          </div>
          <div id="Community-container">
          <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Discord</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Email</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Support</span>
                </li>
              </ul>
          </div>
          <div id="Others-container">
          <ul className="list-disc list-inside text-red-500">
                <li>
                  <span className="text-black dark:text-white">Cycle</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Sports Equipment</span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Contact us</span>
                </li>
              </ul>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default PopularCategories;
