// components/Header/Header.js
import React, { useState } from "react";
// import { Logo, NavigationLinks } from './'; // Import from the index.js file
import about from "../../images/svg/whiteAbout.svg";
import contact from "../../images/svg/whiteContact.svg";
import faq from "../../images/svg/whiteFaq.svg";
import seven from "../../images/svg/sevenshoplogo.svg";
import search from "../../images/svg/search.svg";
import account from "../../images/svg/account.svg";
import cart from "../../images/svg/cart.svg";
const navigationItems = [
  { image: about, label: "About Brand" },
  { image: faq, label: "Faq" },
  { image: contact, label: "Contact" },
];

const MenuItems = [
  {
    label: "Home",
  },
  {
    label: "Catalogue",
  },
  {
    label: "Women",
  },
  {
    label: "Men",
  },
  {
    label: "Accessories",
  },
  {
    label: "Sale",
  },
  {
    label: "News",
  },
  {
    label: "Info",
  },
];

const imageItems = [
  {
    image: search,
  },
  {
    image: account,
  },
  {
    image: cart,
  },
];

const Header = () => {
  const [element, setElement] = useState(null);
  const [dropdown, setDropDown] = useState(null);

  return (
    <>
      <div className=" py-3 text-white bg-pink text-xs">
        <div className="flex justify-between mx-auto container">
          <div className="left px-5">
            <a href="tel:+01 023 345 678" className="text-[13px]">
              <span className="text-grayWhite mr-[7px]">HOTLINE:</span>+01 023
              345 678
            </a>
          </div>
          <div className="right px-5 flex">
            {navigationItems.map(({ image, label }, id) => (
              <div
                key={id}
                className={"flex items-center mr-4 cursor-pointer uppercase"}
                onMouseEnter={() => setElement(id)}
                onMouseLeave={() => setElement(null)}
              >
                <a className="mr-[7px]" href="/">
                  <img
                    className={`${
                      element === id
                        ? "transition duration-200 ease-in"
                        : "invert-50"
                    } w-4 h-4`}
                    src={image}
                    alt={label + " Logo"}
                  />
                </a>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="midbar ">
        <nav
          className="items-center flex min-h-[100px] relative"
          onMouseLeave={() => setDropDown(null)}
        >
          <div className="mx-auto px-5 container">
            <div className="flex items-center justify-between ">
              <img src={seven} className="w-[130px]" />
              <div className="flex items-center mb-screen:justify-end mobile:mt-2 text-md">
                {MenuItems.map(({ label }, id) => {
                  return (
                    <div key={id} className="">
                      <a
                        className={`${
                          id === 0 ? "" : "invert-50"
                        } rounded-md px-3 py-2 font-medium cursor-pointer`}
                        onMouseEnter={() => setDropDown(id)}
                      >
                        {label}
                      </a>
                      <div>
                        {" "}
                        <div
                          className={`${
                            dropdown === id
                              ? "opacity-100 bg-pink-200 "
                              : "opacity-0 transition-opacity duration-800 ease-in"
                          } absolute top-full left-0 mt-1 bg-white w-full rounded-md shadow-lg `}
                        >
                          <div className="py-2 min-h-[420px] "></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex invert-50">
                {imageItems.map(({ image }, id) => {
                  return (
                    <a key={id}>
                      <img
                        className={`${id === 1 ? "mx-5" : ""} w-5`}
                        src={image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
