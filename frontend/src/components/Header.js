import React from "react";
import fire from "../icons/fire.png";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  //locations
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    navigate("/SignIn");
  };

  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav class=" font-thin  bg-white border-gray-200 px-2 py-1 sm:px-4  dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="p-1 text-sm text-white bg-gray-700  pl-10 focus:outline-none focus:text-gray-900 w-72"
            placeholder="Search 8,000+ tutorials"
            autocomplete="off"
          />
        </div>
        <div class=" font-serif text-xl flex  whitespace-nowrap dark:text-white">
          <div class="">freeCodeCamp(</div>
          <img src={fire} alt="fire" class="w-5 h-5 " />
          <div>)</div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <div class="flex flex-col p-1 px-0 bg-gray-50  md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <button
              class="border p-1 px-2 text-white border-slate-50 "
              onClick={logOut}
            >
              Menu
            </button>
            {user ? (
              <div></div>
            ) : (
              <button
                class=" p-1 px-2 text-black bg-yellow-300 border-slate-50 "
                onClick={onClick}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
