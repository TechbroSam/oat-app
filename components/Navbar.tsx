import React, { useState } from "react";

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<NavbarProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`pb-4 pl-2 absolute top-0 left-0 h-fit w-full drop-shadow-md md:hidden bg-[#0D0D0D] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-20">
        {" "}
        {/*logo container*/}
        <img className="lg:w-14 w-10" src="/img/oat_logo.png" alt="" />
        <div className="lg:text-5xl text-4xl font-bold">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-normal my-4 ulnav"
          href="/swap"
          target="_blank"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          SWAP
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="/staking"
          target="_blank"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          STAKING
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="/locker"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          LOCKER
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="/staking"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          OATBANK
        </a>
        <a
          className="text-xl font-normal my-4 ulnav"
          href="/whitepaper.pdf"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          OATPAPER
        </a>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="z-10 flex shadow-lg shadow-[#F2C572]/30 h-20 items-center bg-[#0D0D0D] py-1
    px-5 md:py-11 md:px-[10%] sticky top-0 cursor-pointer"
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <img className="lg:w-14 w-10" src="/img/oat_logo.png" alt="" />
        <div className="lg:text-5xl text-4xl font-bold">
          O<span className="text-[#F2C572]">A</span>T
        </div>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          {!open && (
            <span
              className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out`}
            />
          )}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <a href="/swap" target="_blank">
            <ul className="ulnav mx-4 md:text-xs lg:text-lg">SWAP</ul>
          </a>
          <a
            href="/staking"
            target="_blank"
          >
            <ul className="ulnav mx-4 md:text-xs lg:text-lg">STAKING</ul>
          </a>
          <a href="/locker" target="_blank">
            <ul className="ulnav mx-4 md:text-xs lg:text-lg">LOCKER</ul>
          </a>
          <a
            href="/swap"
            target="_blank"
          >
            <ul className="ulnav mx-4 md:text-xs lg:text-lg">OATBANK</ul>
          </a>
          <a
            href="/staking"
            target="_blank"
          >
            <ul className="ulnav mx-4 md:text-xs lg:text-lg">WHITEPAPER</ul>
          </a>
        </div>
      </div>
    </nav>
  );
}
