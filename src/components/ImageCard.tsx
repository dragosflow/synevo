import React from "react";
import background from "../assets/images/bg.png";
import playIcon from "../assets/svgs/play-icon.svg";
export const ImageCard = () => {
  return (
    <div className='p-5'>
      <div className='relative h-96  w-full rounded-xl p-'>
        <div
          className='inset-0 absolute bg-cover z-50 bg-center rounded-xl '
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className='absolute top-0 right-0 pr-10 pt-5 '>
            <p className='text-synevo-yellow font-semibold'>Recoltare cu</p>
            <p className='text-white font-light'> realitate augumentata</p>
          </div>
          <div className='absolute bottom-0 right-0 pr-5 pb-10'>
            <img src={playIcon} alt='play icon' />
          </div>
        </div>
      </div>
    </div>
  );
};
