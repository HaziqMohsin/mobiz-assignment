"use client";
import React from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { openSidebar, closeSidebar } from "@/redux/features/globalSlice";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();
  const active = "bg-gray-100 dark:bg-gray-700";

  const isSidebarOpen = useAppSelector(
    (state) => state.globalReducer.isSidebarOpen
  );

  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    if (isSidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };
  return (
    <>
      <div
        className="space-y-1.5 p-4 cursor-pointer absolute"
        onClick={handleToggleSidebar}
      >
        <span className="block w-6 h-0.5 bg-gray-600"></span>
        <span className="block w-6 h-0.5 bg-gray-600"></span>
        <span className="block w-2 h-0.5 bg-gray-600"></span>
      </div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 ${
          isSidebarOpen === false ? "-translate-x-[9999px]" : "translate-x-0"
        } h-screen transition-transform w-64`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div
            onClick={handleToggleSidebar}
            className="dark:text-white cursor-pointer ml-2 mb-4"
          >{`<-`}</div>

          {isSidebarOpen === true ? (
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  onClick={() => dispatch(closeSidebar())}
                  href="/"
                  className={`flex items-center p-2 ${
                    pathname === "/" ? active : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => dispatch(closeSidebar())}
                  href="/user"
                  className={`flex items-center p-2 ${
                    pathname === "/user" ? active : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => dispatch(closeSidebar())}
                  href="/product"
                  className={`flex items-center p-2 ${
                    pathname === "/product" || pathname === "/product/create"
                      ? active
                      : ""
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Product</span>
                </Link>
              </li>
              <li
                className="cursor-pointer text-red-500 text-xs"
                onClick={() => signOut()}
              >
                Log out
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
