import React from 'react'
const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg dark:bg-black m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://#.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
              Store<span className="text-red-500">O</span>ne
            </span>
          </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <p className="hover:underline me-4 md:me-6">
                  About
                </p>
              </li>
              <li>
                <p className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="hover:underline me-4 md:me-6">
                  Licensing
                </p>
              </li>
              <li>
                <p className="hover:underline">
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023  StoreOne. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
