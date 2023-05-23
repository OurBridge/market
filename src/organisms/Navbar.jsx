import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";
import Logo from "../atoms/Logo";

const Navbar = () => {
  const location = useLocation();
  const [view, setView] = useState(false);
  const path = location.pathname.split("/")[1];

  const handleViewNavBar = () => {
    setView((view) => !view);
  };

  return (
    <header
      className={`border-prigray-300 border-b h-7/100 ${
        path !== "map" && "fixed left-0 top-0 w-full z-50 bg-white"
      } `}
    >
      <nav className="bg-white border-gray-200 dark:bg-gray-900 text-tblack">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto">
          <div className="p-5">
            <Logo />
          </div>
          
          <div className="flex items-center">
            <div className="flex md:order-2">
              <a
                href="/login"
                className="text-white bg-blue-700 
            hover:bg-blue-800 font-medium rounded-lg 
            text-sm px-4 py-2 text-center my-2.5 md:my-0 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
              >
                로그인
              </a>

              {/* 모바일 */}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="p-5 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg
              md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={handleViewNavBar}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={`${
                view ? "" : "hidden"
              } w-full items-center justify-between w-full md:flex md:w-auto md:order-1 the_first `}
            >
              <div className="px-5 pb-5 md:pb-0 bg-white">
                <ul
                  className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8
             md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                  <li>
                    <a
                      href="/"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/curation"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      큐레이션
                    </a>
                  </li>
                  <li>
                    <a
                      href="/map"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      시장지도
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
