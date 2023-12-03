"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Close } from "@mui/icons-material";
import { GiHamburgerMenu } from "react-icons/gi";
import { CloseButton } from "./styles";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(true);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  const renderLink = (href, label) => (
    <Link
      href={href}
      className="py-5 hover:bg-[#D38A23] hover:w-full flex justify-center items-center"
    >
      {label}
    </Link>
  );

  return (
    <div>
      <nav className="bg-black text-white py-5 fixed top-0 w-full z-10">
        <div className="bg-black  max-w-4xl flex justify-between mx-auto px-5">
          <h2 className="py-2 uppercase font-bold">
            Studio-G <span className=" font-thin text-xs">©</span>
          </h2>
          <div className="hidden  sm:inline-flex gap-10 px-5 py-2 lg:rounded-full">
            <Link href="/">Home</Link>
            {/* <Link href="/">Disciplinas</Link> */}
            <Link href="/post">Noticias</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
          <div
            onClick={toggleHamburger}
            className=" group sm:hidden items-center"
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className=" text-3xl" />
            <div
              className={
                showHamburger
                  ? "hidden"
                  : `sm:hidden flex justify-around w-screen absolute top-0 right-0 duration-100 py-3 bg-black bg-opacity-100`
              }
            >
              <div>
                <div className="flex justify-between align-middle px-5 pt-4 w-screen">
                  <h2 className=" uppercase font-bold pt-2">
                    Studio-G <span className=" font-thin text-xs">©</span>
                  </h2>
                  <CloseButton>
                    <Close />
                  </CloseButton>
                </div>
                {renderLink("/", "Home")}
                {/* {renderLink("/", "Disciplinas")} */}
                {renderLink("/post", "Noticias")}
                {renderLink("/contacto", "Contacto")}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
