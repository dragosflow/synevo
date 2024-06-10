import React from "react";

interface OptionsCardProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  notificationsNumber?: number;
  className?: string;
}

const Badge = ({ notificationsNumber }: { notificationsNumber: number }) => {
  return (
    <div className=' border border-synevo-blue text-synevo-blue px-3 py-1 rounded-full flex items-center justify-center text-xs font-light '>
      {notificationsNumber} new
    </div>
  );
};

export const OptionsCard = ({
  title,
  subtitle,
  iconSrc,
  notificationsNumber,
  className,
}: OptionsCardProps) => {
  return (
    <div
      className={`pl-2.5 pt-5 pb-3 min-w-40 max-w-40 md:w-1/4 md:mx-auto md:min-w-80 bg-white border border-gray-100 relative select-none ${className} inline-block`}
    >
      <div className='absolute right-0 top-0 h-10 '>
        <div className='pt-3 pr-2'>
          {notificationsNumber && (
            <Badge notificationsNumber={notificationsNumber} />
          )}
        </div>
      </div>
      <img src={iconSrc} alt='icon' className='w-10 h-10 mb-7 mt-2' />
      <h2 className='mt-4 text-lg font-extrabold text-synevo-blue'>{title}</h2>
      <p className='text-synevo-blue font-extralight -mt-2'>{subtitle}</p>
    </div>
  );
};
