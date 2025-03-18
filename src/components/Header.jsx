import  React,{useState} from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';
import {useCart} from "../ContextAPI/CartContext.jsx";//import custom hook in files which has to use the state
import Cart from './Cart.jsx'
const Header = () => {
  const [alert, setAlert] = useState("");
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);
  const handleCart = (cart) =>{
    setCart(!cart);
  }
  const {items} = useCart();//declare custom hooks like this
  const cartLength = items.length;
  const cartCSS = `.carticon {
color: black;
}
@media (prefers-color-scheme: dark){
.carticon{
color: white;
}
}
`;
  return (
    <>
      <style scoped>{cartCSS}</style>
      {cart && <Cart alert={alert}/>}
      <div
        id="alert-1"
        className={`flex items-center p-4 mb-4 text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 ${alert}`}
        role="alert"
      >
        <svg
          className="shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ms-3 text-sm font-medium">
          To build a safer community, please varify yourself by{" "}
          <a href="#" className="font-semibold underline hover:no-underline">
            clicking here.
          </a>
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={() => {
            setAlert("hidden");
          }}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/"
            href="https://#.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
              Store<span className="text-red-500">O</span>ne
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => {
              setNav(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block mt-1 py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  <span className="text-black dark:text-white">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block mt-1 py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-black dark:text-white">Store</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block mt-1 py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-black dark:text-white">Contact</span>
                </a>
              </li>
              <li>
                <button className="cursor-pointer flex">
                  <ShoppingCartOutlined className="h-6 w-6 text-2xl mt-1 carticon " onClick={()=>{handleCart(cart)}}/><p className="text-white text-xs rounded-full"><span className="bg-red-500 rounded-full px-1">{cartLength}</span></p>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block  py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Button color="danger" variant="text">
                    Sign Up
                  </Button>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Button color="danger" variant="solid">
                    Log In
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white dark:bg-black ease-in-out duration-500"
            : "hidden"
        }
      >
        <li className="p-4 dark:text-white">Home</li>
        <li className="p-4 dark:text-white">About</li>
        <li className="p-4 dark:text-white">Contact</li>
        <li className="p-4 dark:text-white">
          <ShoppingCartOutlined className="h-6 w-6 text-2xl mt-1 carticon " />
        </li>
        <li className="dark:text-white">
          {" "}
          <Button color="danger" variant="text">
            Sign Up
          </Button>
        </li>
        <li className="p-4 dark:text-white">
          {" "}
          <Button color="danger" variant="solid">
            Log In
          </Button>
        </li>
        <li className="p-4 dark:text-white">
          {" "}
          <Button
            color="danger"
            variant="solid"
            onClick={() => {
              setNav(false);
            }}
          >
            Close
          </Button>
        </li>
      </ul>
    </>
  );
};
export default Header;
