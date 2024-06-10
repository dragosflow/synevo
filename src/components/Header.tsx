import React from "react";
import menuIcon from "../assets/svgs/header-menu-icon.svg";
import logo from "../assets/svgs/logo.svg";
import logoText from "../assets/svgs/logo-text.svg";
import headerBell from "../assets/svgs/header-bell.svg";
import { PlusIcon } from "@heroicons/react/20/solid";
import { CircleButton } from "./CircleButton";
export const Header = () => {
  return (
    <div className='w-full bg-white mt-0.5 mb-2 rounded-tr-3xl rounded-tl-3xl flex'>
      <div className='p-5 flex w-full'>
        <img
          src={menuIcon}
          alt='header icon'
          className='w-5 h-5 my-auto hover:cursor-pointer'
        />
        <img src={logo} alt='logo' className='w-7 ml-7 my-auto' />
        <img
          src={logoText}
          alt='logo text'
          className='w-24 mt-3 ml-1 my-auto'
        />
      </div>
      <div className=' flex p-5 justify-end w-full'>
        <div className='my-auto hover:cursor-pointer'>
          <div className='h-2.5 w-2.5 rounded-full absolute ml-2 bg-synevo-yellow hover:animate-ping-slow duration-1000' />
          <img
            src={headerBell}
            alt='bell icon'
            className='w-7 h-7 my-auto mt-1'
          />
        </div>
        <CircleButton
          className='ml-6 bg-white'
          icon={<PlusIcon className='w-8 h-8 text-synevo-blue' />}
        />
      </div>
    </div>
  );
};
