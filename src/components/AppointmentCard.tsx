import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import drop from "../assets/svgs/drop.svg";
import React, { ReactNode } from "react";

interface AppointmentCardProps {
  className?: string;
  location: string;
  date: string;
  time: string;
  type: string;
}

const TextWithIcon = ({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className='flex items-center'>
      {icon}
      <p className={`text-xs font-normal ml-2 ${className}`}>{text}</p>
    </div>
  );
};

export const AppointmentCard = ({
  className,
  location,
  date,
  time,
  type,
}: AppointmentCardProps) => {
  return (
    <div
      className={`bg-white max-w-64 min-w-64 rounded-xl p-5 mt-3 select-none ${className}`}
    >
      <h1 className='text-md'>Popescu Ionut Vasile</h1>
      <div className='w-1/5 mt-2 mb-3 border-[1px] border-synevo-yellow' />
      <TextWithIcon
        className='text-synevo-blue font-semibold'
        icon={<MapPinIcon className='h-6 w-6 text-synevo-blue' />}
        text={location}
      />
      <div className='mt-5 space-y-2'>
        <TextWithIcon
          className='font-extralight'
          icon={<CalendarIcon className='h-6 w-6 text-synevo-blue' />}
          text={date}
        />
        <TextWithIcon
          className='font-extralight'
          icon={<ClockIcon className='h-6 w-6 text-synevo-blue' />}
          text={time}
        />
        <TextWithIcon
          className='font-extralight'
          icon={<img src={drop} alt='drop' className='h-6 w-6' />}
          text={type}
        />
      </div>
    </div>
  );
};
