import React from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import cartIcon from "../assets/svgs/cart.svg";
import scheduleIcon from "../assets/svgs/schedule.svg";
import homeIcon from "../assets/svgs/home.svg";
import analysisIcon from "../assets/svgs/analysis.svg";

const FooterMenu = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed md:max-w-3xl mx-auto bottom-0 left-5 right-5 z-50 bg-synevo-blue rounded-xl py-6 px-5 flex justify-around items-center text-white shadow-lg transition-transform duration-300 ${
        scrollDirection === "down"
          ? "translate-y-0 bottom-2"
          : "translate-y-full bottom-0"
      }`}
    >
      <div className='flex flex-col items-center hover:cursor-pointer'>
        <img src={homeIcon} alt='home' />
        <span className='text-yellow-500'>Home</span>
      </div>
      <div className='flex flex-col items-center hover:cursor-pointer'>
        <img src={scheduleIcon} alt='schedule' />
        <span>Appointments</span>
      </div>
      <div className='flex flex-col items-center hover:cursor-pointer'>
        <img src={analysisIcon} alt='analysis' />
        <span>Results</span>
      </div>
      <div className='relative flex flex-col items-center hover:cursor-pointer'>
        <img src={cartIcon} alt='cart' />
        <span>Store</span>
        <div className='absolute top-0 right-0 bg-yellow-500 rounded-full text-xs w-4 h-4 flex items-center text-white justify-center'>
          23
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
